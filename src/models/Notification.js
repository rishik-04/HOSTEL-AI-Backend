const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
{
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    complaintId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        default: "Sent",
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Notification", notificationSchema);