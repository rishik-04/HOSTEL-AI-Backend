const AgentActionLog = require("../models/AgentActionLog");

// Create Log
const createLog = async (req, res) => {
  try {

    const log = await AgentActionLog.create(req.body);

    res.status(201).json({
      message: "Agent Action Logged Successfully",
      log,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Logs
const getLogs = async (req, res) => {
  try {

    const logs = await AgentActionLog.find();

    res.status(200).json(logs);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLog,
  getLogs,
};