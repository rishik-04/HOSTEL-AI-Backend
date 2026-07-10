const Technician = require("../models/Technician");

// Create Technician
const createTechnician = async (req, res) => {
  try {
    const technician = await Technician.create(req.body);

    res.status(201).json({
      message: "Technician Created Successfully",
      technician,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Technicians
const getTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find();

    res.status(200).json(technicians);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Technician By ID
const getTechnician = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id);

    if (!technician) {
      return res.status(404).json({
        message: "Technician Not Found",
      });
    }

    res.status(200).json(technician);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Technician
const updateTechnician = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!technician) {
      return res.status(404).json({
        message: "Technician Not Found",
      });
    }

    res.status(200).json({
      message: "Technician Updated Successfully",
      technician,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Technician
const deleteTechnician = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndDelete(req.params.id);

    if (!technician) {
      return res.status(404).json({
        message: "Technician Not Found",
      });
    }

    res.status(200).json({
      message: "Technician Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTechnician,
  getTechnicians,
  getTechnician,
  updateTechnician,
  deleteTechnician,
};