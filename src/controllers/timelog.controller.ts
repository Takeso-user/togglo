import express from "express";
import {TimeLogModel} from "../db/timelog.schema.js";

class TimelogController {
    async getTimeLogById(req: express.Request, res: express.Response) {
        try {

            const {id} = req.params;
            const timelog = await TimeLogModel.findById(id)
            res.status(200).json({timelog});
        } catch (e) {
            res.status(500).send({error: e});
        }
    }

    async createTimelog(req: express.Request, res: express.Response) {
        try {
            const timelog = TimeLogModel.create(req.body)
            res.status(201).json({timelog});
        } catch (e) {
            res.status(500).send({error: e});
        }
    }
}
export default new TimelogController();