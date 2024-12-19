const { generateToken } = require("../middlewares/jwtAuth");
const Admin = require("../models/Admin");
const Contact = require("../models/Contact");
const project = require("../models/Project");
const { comparePassword, hashPassword } = require("../utils/bcrypt");
// Authentication
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const admin = await Admin.findOne({ email: email });
    if (admin) {
      if (await comparePassword(password, admin?.password)) {
        const token = generateToken(admin?._id);
        // res.cookies("adminToken)
        return res
          .status(200)
          .send({ message: "Logged In Successfully!", admin, token: token });
      } else {
        return res.status(403).send({ message: "Invalid Password!" });
      }
    } else {
      await Admin.create({
        ...req.body,
        password: await hashPassword(password),
      });
      return res.status(201).send({ message: "Admin Created!" });
    }
  } else {
    return res
      .status(403)
      .send({ message: "Please provide email and password" });
  }
};

// Projects
exports.addProject = async (req, res) => {
  const {
    title,
    description,
    challenges,
    solutions,
    results,
    resultsHeading,
    solutionsHeading,
    challengesHeading,
    descriptionHeading,
  } = req.body;
  const { thumbnail, images } = req.files;
  console.log(thumbnail,'THUMBNAIL');
  let imagesArr;
  if (images?.length > 0) {
    imagesArr = images.map((elem) => {
      return elem.filename;
    });
  }
  const newProject = await project.create({
    title: title,
    description: description,
    thumbnail: thumbnail[0]?.filename,
    images: imagesArr,
    challenges: challenges,
    solution: solutions,
    results: results,
    challengesHeading: challengesHeading,
    solutionHeading: solutionsHeading,
    resultsHeading: resultsHeading,
    descriptionHeading: descriptionHeading,
  });
  // //   console.log(thumbnail_url);
  return res.status(201).json({ message: "Added New Project!", newProject });
};
exports.getProjects = async (req, res) => {
  const projects = await project.find();
  if (!projects) {
    return res.status(401).send({ message: "No projects found!" });
  }
  return res.status(200).send({
    message: "Projects Fetched Successfully!",
    projects: projects,
    count: projects?.length,
  });
};
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await project.findByIdAndDelete(id);
  const projectsData = await project.find();
  return res
    .status(200)
    .send({ message: "Deleted Successfully!", projects: projectsData });
};
exports.editProjects = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body,'BODYYDYDYDY');

    // Extract files from the request
    // const { thumbnail, selectedImages } = req.files;

    // Find the existing project
    let existingProject = await project.findById(id);

    // Check if the project exists
    if (!existingProject) {
      return res.status(404).send({ message: "Project not found!" });
    }

    // if (!req.files.images) {
    //   existingProject.images = req.body.images;
    // }
    // Update the images if any selectedImages are provided
    if (req?.files?.images && req?.files?.images?.length > 0) {
      existingProject.images = [
        ...existingProject.images,
        ...req.files.images.map((img) => img.filename),
      ];
    }

    // Update the thumbnail if provided
    if (req?.files?.thumbnail) {
      console.log(req.files.thumbnail, "THUMB");
      existingProject.thumbnail = req.files.thumbnail[0].filename; // Assuming thumbnail is uploaded as an array
    }

    console.log(req.body.images, "IMAGES");
    // Update other fields from req.body
    Object.assign(existingProject, req.body);

    // Save the updated project
    await existingProject.save();

    return res
      .status(200)
      .send({ message: "Project Updated!", existingProject });
  } catch (error) {
    console.error("Error updating project:", error);
    return res
      .status(500)
      .send({ message: "An error occurred while updating the project." });
  }
};
// ENQUIRIES CONTROLLER
exports.getEnquiries = async (req, res) => {
  const queries = await Contact.find();
  if (!queries) {
    return res.status(401).send({ message: "No Queries" });
  }
  return res.status(200).send({
    message: "Enquiries fetched!",
    enquiries: queries,
    count: queries?.length,
  });
};
exports.deleteEnquiry = async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  const contactsData = await Contact.find();
  return res
    .status(200)
    .send({ message: "Deleted Successfully!", enquiries: contactsData });
};
exports.addEnquiry = async (req, res) => {
  const newQuery = await Contact.create(req.body);
  const queries = await Contact.find();
  return res.status(201).send({ message: "Enquiry Added!", queries: queries });
};
