const express = require("express");
const router = express.Router();

let userCtrl = require("../controllers/userController");
let authCtrl = require("../controllers/authController");

// GET request for list of all Users
router.get("/", userCtrl.list);

// POST request for creating a user
router.post("/", userCtrl.create);

// GET request for Signin required for one user
router.get("/:userId", authCtrl.requireSignin);

// GET request for a one user
router.get("/:userId", userCtrl.read);

// PUT request for Signin required for one user
router.put("/:userId", authCtrl.requireSignin);

// PUT request for Authorisation required for one user
router.put("/:userId", authCtrl.hasAuthorization);

// PUT request to update one user
router.put("/:userId", userCtrl.update);

// DELETE request for Signin required for one user
router.delete("/:userId", authCtrl.requireSignin);

// DELETE request for Authorisation required for one user
router.delete("/:userId", authCtrl.hasAuthorization);

// DELETE request to delete one user
router.delete("/:userId", userCtrl.remove);

router.param("userId", userCtrl.userByID);

module.exports = router;
