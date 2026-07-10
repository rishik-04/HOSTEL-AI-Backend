const Notification = require("../models/Notification");

// Send Notification
const sendNotification = async (req, res) => {
  try {

    const notification = await Notification.create(req.body);

    res.status(201).json({
      message: "Notification Sent Successfully",
      notification,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Notifications
const getNotifications = async (req, res) => {
  try {

    const notifications = await Notification.find();

    res.status(200).json(notifications);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendNotification,
  getNotifications,
};