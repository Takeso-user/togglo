import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required:true
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export const TaskModel = mongoose.model("Tasks", taskSchema);
