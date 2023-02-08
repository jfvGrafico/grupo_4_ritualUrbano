const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users/");
  },
  filename: function (req, file, cb) {       
      cb(null, file.originalname)
  },
});

const uploadFile = multer({ storage })

module.exports = uploadFile;