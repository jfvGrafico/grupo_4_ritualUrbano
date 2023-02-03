const multer = require('multer');
const path = require('path');
const fs = require('fs')



//configuracion de multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users/')
    },
    filename: function (req, file, cb) {
      let FileName = Math.round(Math.random() * 1E9) + '-img' + path.extname(file.originalname)
    cb(null, FileName)
    }
  })
  
  const upload = multer({ storage: storage });

  module.exports = upload