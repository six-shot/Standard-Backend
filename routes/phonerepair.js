const express = require("express");
const {
  getPhones,
  getPhone,
  createPhone,
  deletePhone,
  updatePhone,
} = require("../controllers/phonerepair");

const router = express.Router();

router.get("/", getPhones);

router.get("/:id", getPhone);

router.post("/", createPhone);

router.delete("/:id", deletePhone);

router.patch("/:id", updatePhone);

module.exports = router;
