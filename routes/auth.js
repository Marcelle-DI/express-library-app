const express = require("express");
const router = express.Router();

let authCtrl = require("../controllers/authController");

router.post("/auth/signin", authCtrl.signin);
router.get("/auth/signout", authCtrl.signout);

module.exports = router;
