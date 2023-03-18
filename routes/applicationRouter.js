const express = require("express");
const {
  getAllApplication,
  createApplication,
  updateApplication,
  deleteApplication,
  getSingleApplicationForUser,
  getSingleApplicationForEmployer
} = require("../controllers/applicationController");

const applicationRouter = express.Router();

//Optimize:   ***** Routes ******

applicationRouter.route("/").get(getAllApplication).post(createApplication);
applicationRouter.route("user/:id").get(getSingleApplicationForUser);
applicationRouter.route("employer/:id").get(getSingleApplicationForEmployer);
applicationRouter
  .route("/:id")
  .delete(deleteApplication)
  .patch(updateApplication);

module.exports = applicationRouter;