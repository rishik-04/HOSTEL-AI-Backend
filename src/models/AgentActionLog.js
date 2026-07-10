const mongoose = require("mongoose");

const agentActionLogSchema = new mongoose.Schema(
{
    complaintId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complaint",
        required: true,
    },

    action: {
        type: String,
        required: true,
    },

    reason: {
        type: String,
        required: true,
    },

    performedBy: {
        type: String,
        default: "AI Agent",
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("AgentActionLog", agentActionLogSchema);