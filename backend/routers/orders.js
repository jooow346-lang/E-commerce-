const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('./../middleware/middleware');
const adminMiddleware = require('./../middleware/adminMiddleware');
const Order = require('./../model/orders');
const Cart = require('./../model/cart'); 
const axios = require("axios");

//post


router.post("/order",authenticationMiddleware, async (req,res) => {
    try{
   const cart= await Cart.findOne({userId :req.user._id})
        if(!cart){
        return    res.status(404).json({"message" : "Cart not found"});
        
        }
        if(cart.products.length === 0){
            return res.status(400).json({"message" : "Cart is empty"});
        }
         if (!req.body.shippingAddress) {
    return res.status(400).json({
        message: "Shipping address is required"
    });
}
    const products =await Promise.all(cart.products.map(async (p) =>{
        const response = await axios.get(`https://dummyjson.com/products/${p.productId}`);
       
        return {
            productId: p.productId,
            title: response.data.title,
            price: response.data.price,
            thumbnail: response.data.thumbnail,
            quantity: p.quantity,
            

        }
    }))
    const  totalPrice = products.reduce((aucc,current)=>{
        return aucc+current.price *current.quantity
    },0)
    const totalItems= products.reduce((aucc,current)=>{
        return aucc+current.quantity
    },0)

    if (
    req.body.paymentMethod &&
    !["cash", "card"].includes(req.body.paymentMethod)
    ) {
    return res.status(400).json({
        message: "Invalid payment method"
    });
    }

    
    const order =new Order({
        userId : req.user._id,
        products :  products,
        shippingAddress : req.body.shippingAddress,
        paymentMethod : req.body.paymentMethod,
        totalPrice,
        totalItems,
    })
   
        await order.save();
        cart.products = [];
        await cart.save();
    return res.status(201).json({
    message: "Order created successfully",
    order
});

}catch (error) {
  if (error.response?.status === 404) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(500).json({
    message: error.message
  });
}
})


router.get("/orders",authenticationMiddleware, async (req,res) => {
    try{
        const orders = await Order.find({userId : req.user._id})
        if(orders.length === 0){
            return res.status(404).json({message : "Order not found"});
        }
       return res.status(200).json(orders);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})


router.get("/order/:id",authenticationMiddleware, async (req,res) => {
    try{
      const order = await Order.findOne({ _id: req.params.id,
    userId: req.user._id});
      if(!order){
        return res.status(404).json({message : "Order not found"});
      }
      return res.status(200).json(order);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})


router.patch('/order/:id' , authenticationMiddleware,adminMiddleware, async (req, res) => {
    try {
        const order = await Order.findOne({_id: req.params.id,
    userId: req.user._id});
    if(!order){
        return res.status(404).json({message : "Order not found"});
    }
    order.status = req.body.status;
    await order.save();
    return res.status(200).json(order);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})

module.exports = router;