const express = require("express");
const {
  addProject,
  getProjects,
  deleteProject,
  editProjects,
  getEnquiries,
  deleteEnquiry,
  adminLogin,
} = require("../controllers/adminControllers");
const { upload } = require("../middlewares/multerConfig");
const { userAuth } = require("../middlewares/userAuth");
const router = express.Router();

router.post(
  "/add-project",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    {
      name: "images",
      maxCount: 5,
    },
  ]),
  addProject
);
router.get("/get-projects", getProjects);
router.post("/delete-project/:id", deleteProject);
router.post(
  "/edit-projects/:id",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  editProjects
);
router.get("/get-enquiries", getEnquiries);
router.post("/delete-enquiry/:id", deleteEnquiry);
router.post("/login", userAuth, adminLogin);

module.exports = router;
