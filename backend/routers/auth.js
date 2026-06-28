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

    const accessToken = jwt.sign(
  {
    _id: user._id,
    role: user.role
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: "15m"
  }
);

const refreshToken = jwt.sign(
  {
    _id: user._id,
    role: user.role
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn: "7d"
  }
);
    user.refreshToken = refreshToken;
    await user.save();  
    res.status(200).json({accessToken , refreshToken});
}
catch(error){
    res.status(500).json({message : error.message});
}


})


//refresh token


router.post('/refresh' , async (req , res) => {
    try{
        
        const refreshToken = req.body.refreshToken;
        const decoded  = await jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET);
       
        const user = await User.findById(decoded._id);
         const accessToken = jwt.sign(
  {
    _id: user._id,
    role: user.role
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: "15m"
  }
);
         if (!refreshToken) {
          return res.status(401).json({
            message: "Refresh token required"
          });
        }
        if (!user) {
          return res.status(404).json({
            message: "User not found"
          });
        }

        if (user.refreshToken !== refreshToken) {
          return res.status(403).json({
            message: "Invalid refresh token"
          });
        }
                res.status(200).json({accessToken});
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
})

//logout

router.post('/logout', async (req, res) => {
  try{

    const refreshToken = req.body.refreshToken;
    if(!refreshToken){
      return res.status(400).json({message: "Refresh token required"});
    }
    
    const user = await User.findOne({refreshToken});
    if(!user){
      return res.status(400).json({message: "User not found"});
    }
    user.refreshToken="";
    await user.save();
    res.status(200).json({message: "Logout successful"});

    }

  
  catch(error){
    res.status(500).json({message : error.message});
  }
})



module.exports = router