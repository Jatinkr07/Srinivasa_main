const multer = require("multer");
const path = require("path");

// Set storage engine to save files to the 'uploads' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the uploads folder
  },
  filename: (req, file, cb) => {
    // Use the original name and add a timestamp to avoid name collisions
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Initialize upload with file size limit
exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5 MB
  },
});
