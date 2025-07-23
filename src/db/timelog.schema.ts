import mongoose from "mongoose";

const timeLogSchema = new mongoose.Schema({
    taskId:{
        type: String,
        required: true
    },
    startTime:{
        type:Date,
        default:Date.now
    },
    endTime:{
        type:Date
    }
});

export const TimeLogModel = mongoose.model("TimeLog", timeLogSchema);
