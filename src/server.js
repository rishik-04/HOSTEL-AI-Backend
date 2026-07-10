const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const technicianRoutes = require("./routes/technicianRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const agentActionLogRoutes = require("./routes/agentActionLogRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/technicians", technicianRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/agentlogs", agentActionLogRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("HOSTEL AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});