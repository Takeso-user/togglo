import express from "express";
import {TaskModel} from "../db/tasks.schema.js";

class TaskController {
    async getAllTasks(req: express.Request, res: express.Response) {
        try {
            const tasks = await TaskModel.find();
            res.status(200).json({tasks: tasks});
        } catch (error) {
            res.status(500).send({error: error});
        }
    }

    async getTaskById(req: express.Request, res: express.Response) {
        try{
            const {id} = req.params;
            const task = await  TaskModel.findById(id)
            res.status(200).json({task});
        } catch (error) {
            res.status(500).send({error: error});
        }
    }
    async deleteTaskById(req: express.Request, res: express.Response) {
        try{
            const {id} = req.params;
            const task = await  TaskModel.findByIdAndDelete(id)
            res.status(200).json({task});
        } catch (error) {
            res.status(500).send({error: error});
        }
    }

}
export default new TaskController();