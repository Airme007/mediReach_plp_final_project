const express = require("express");
const router = express.Router();
const clerkAuth = require("../middleware/clerkAuth");

// Placeholder auth routes - add specific auth endpoints as needed
// For example, webhooks or auth status

router.get("/status", clerkAuth, async (req, res) => {
  try {
    res.json({
      authenticated: true,
      userId: req.auth.userId,
      sessionId: req.auth.sessionId,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;