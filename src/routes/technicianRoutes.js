const express = require("express");

const router = express.Router();

const {
  createTechnician,
  getTechnicians,
  getTechnician,
  updateTechnician,
  deleteTechnician,
} = require("../controllers/technicianController");

// Create Technician
router.post("/", createTechnician);

// Get All Technicians
router.get("/", getTechnicians);

// Get Technician By ID
router.get("/:id", getTechnician);

// Update Technician
router.put("/:id", updateTechnician);

// Delete Technician
router.delete("/:id", deleteTechnician);

module.exports = router;