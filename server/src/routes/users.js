const express = require("express");
const router = express.Router();
const clerkAuth = require("../middleware/clerkAuth");

// Example route to get user profile from Clerk session
router.get("/me", clerkAuth, async (req, res) => {
  try {
    res.json({
      userId: req.auth.userId,
      sessionId: req.auth.sessionId,
      user: req.auth.user, // contains email, name, etc.
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
