const multer = require('multer');
const path = require('path');
const express = require('express');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename : function (req,file,cd){
    const name = Date.now() + '-' + path.extname(file.originalname);
    cd(null , name);
  }
});

const upload = multer({storage : storage});

module.exports = upload;