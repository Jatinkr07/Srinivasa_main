const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config()
require("./utils/dbConfig")();
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server Running on 3000");
});
