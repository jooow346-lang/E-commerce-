const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true  ,
          ref: "User",
    },
   products: {
  type: [
    {
      productId: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  required: true
},
    totalPrice: {
                type: Number,
                required: true,
            },
           
    totalItems: {
        type: Number,
        required: true
    },
     orderDate: {
    type: Date,
    default: Date.now
},
    status:{
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    },
    shippingAddress: {
    type: String,
    required: true
},paymentStatus: {
    type: String,
    enum: ["pending", "paid"],
    default: "pending"
},paymentMethod: {
    type: String,
    enum: ["cash", "card"],
    default: "cash"
}

},{
    timestamps: true
})


module.exports = mongoose.model("Order", orderSchema);