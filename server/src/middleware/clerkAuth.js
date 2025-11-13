const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

// This middleware will automatically verify the Clerk session token
// and attach `req.auth` with user info if valid.
const clerkAuth = ClerkExpressWithAuth({
  jwtKey: process.env.CLERK_SECRET_KEY,
});

module.exports = clerkAuth;
