const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../model/user');


//register


router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashPassword
    });

    await user.save();

    res.status(201).json({
      message: 'User created successfully'
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

//login


router.post('/login' , async (req , res) => {
    try{
    const user = await User.findOne({email : req.body.email});
    if(!user){
        return res.status(400).send('user not found');
    }
    const match = await bcrypt.compare(req.body.password , user.password);
    if(!match){
        return res.status(400).send('invalid password');
    }

    const accessToken = await jwt.sign({_id : user._id} , process.env.ACCESS_TOKEN_SECRET,{expiresIn : '15m'});
    const refreshToken = await jwt.sign({_id:user._id} , process.env.REFRESH_TOKEN_SECRET,{expiresIn : '7d'})    res.status(200).json({token , user});
}
catch(error){
    res.status(500).json({message : error.message});
}


})



module.exports = router