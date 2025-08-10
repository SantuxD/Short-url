const express = require("express")
const router = express.Router();
const { handelGeneratorNewShortURL, handelGetAnalytics} = require("../controllers/url")

router.post("/", handelGeneratorNewShortURL);
router.get("/analytics/:shortId", handelGetAnalytics);

module.exports = router;