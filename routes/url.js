const express = require("express")
const router = express.Router();
const { handelGeneratorNewShortURL } = require("../controllers/url")

router.post("/", handelGeneratorNewShortURL);

module.exports = router;