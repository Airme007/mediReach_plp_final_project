require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const clerk = require("@clerk/clerk-sdk-node"); 
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Connect to MongoDB
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);  

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/providers", require("./routes/providers"));
app.use("/api/appointments", require("./routes/appointments"));

// Error handler
app.use(require("./middleware/errorHandler"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
