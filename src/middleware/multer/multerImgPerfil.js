const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, `../../public/img/users/`))
  },
  filename: function (req, file, cb) {
    let FileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, FileName)
  },
})

const uploadFile = multer({ storage })

module.exports = uploadFile;