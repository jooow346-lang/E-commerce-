const express = require('express');
const router = express.Router();
const axios = require('axios');
const authenticationMiddleware = require('./../middleware/middleware');
const Cart = require('./../model/cart'); 





router.post('/add', authenticationMiddleware, async (req, res) => {
  try {
const productId = Number(req.body.productId);
const quantity = Number(req.body.quantity);

if (!productId) {
  return res.status(400).json({
    message: "Product ID is required"
  });
}

if (quantity <= 0) {
  return res.status(400).json({
    message: "Quantity must be greater than 0"
  });
}
const response = await axios.get(

  `https://dummyjson.com/products/${req.body.productId}`
);
    if(!response.data){
        return res.status(404).json({message : "Product not found"});
    }
    
    const cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      const newCart = new Cart({
        userId: req.user._id,
        products: [
          {
            productId: req.body.productId,
            quantity: Number(req.body.quantity),
          },
        ],
      });

      await newCart.save();
      return res.status(200).json({ message: "Product added to cart" });
    }
    
    const productExist = cart.products.findIndex(
      (p) => Number(p.productId) === Number(req.body.productId)
    );

    if (productExist !== -1) {
      cart.products[productExist].quantity += Number(req.body.quantity);
    } else {
      cart.products.push({
        productId: req.body.productId,
        quantity: Number(req.body.quantity),
      });
    }

    await cart.save();

    res.status(200).json({ message: "Cart updated successfully" ,cart});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/remove/:productId', authenticationMiddleware, async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId : req.user._id})
        if(!cart){

            return res.status(404).json({message : "Cart not found"});
        }
        const productExist = cart.products.findIndex(p => p.productId === Number(req.params.productId));
        if(productExist!==-1){
             cart.products.splice(productExist, 1);

            await cart.save();

            return res.status(200).json({
            message: "Product removed successfully"
            });
        }
        else{
        return    res.status(404).json({message : "Product not found"});
        }
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})


router.delete('/clear', authenticationMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({
            userId: req.user._id
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        cart.products = [];

        await cart.save();

        return res.status(200).json({
            message: "Cart cleared successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get('/cart',authenticationMiddleware, async (req,res) =>{
    try{
            const cart = await Cart.findOne({userId : req.user._id})
            if(!cart){
                return res.status(404).json({message : "Cart not found"});
            }
           
                 const products= await Promise.all(cart.products.map(async (p) => {
                    const response = await axios.get(
                        `https://dummyjson.com/products/${p.productId}`);
                     return {
                productId: p.productId,
                quantity: p.quantity,
                title: response.data.title,
                price: response.data.price,
                thumbnail: response.data.thumbnail
              };
                }))
                const totalPrice = products.reduce(
                 (total, item) => total + item.price * item.quantity,0
  
);

                    return res.status(200).json({products,totalPrice});
           
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})


module.exports = router