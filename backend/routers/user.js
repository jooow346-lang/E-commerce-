const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('./../middleware/middleware');
const User = require('./../model/user'); 
const upload = require('./../middleware/uploads');

router.get('/profile' ,authenticationMiddleware, async (req , res) => {
    try{

        const user = await User.findById(req.user._id).select({
  __v: 0,
  password: 0,
  refreshToken: 0,
  name: 0
})
        if(!user){
            return res.status(404).json({message : "User not found"});
        }
        res.status(200).json(user);
    }

    catch(err){
        res.status(500).json({message : err.message});
    }

})




router.put('/profile' ,authenticationMiddleware, async (req , res) => {
    try{
    const user =await User.findById(req.user._id);
    if(!user){
        return res.status(404).json({message : "User not found"});
    }
   if (req.body.profileName) {
  user.profileName = req.body.profileName;
    }

    if (req.body.phone) {
    user.phone = req.body.phone;
    }

    if (req.body.birthDate) {
    user.birthDate = req.body.birthDate;
    }
        await user.save();
        res.status(200).json({message : "Profile updated successfully"});
}
catch(err){
    res.status(500).json({message : err.message});
}
})


router.put('/profile/photo',authenticationMiddleware ,upload.single('profilePhoto'),async (req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({message : "User not found"});
        }
        if(!req.file){
            return res.status(400).json({message : "File not found"});

        }

        user.profilePhoto = req.file.filename;
        await user.save();
        res.status(200).json({message : "Profile photo updated successfully"});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }

})

module.exports = router

