import {UserModel} from "../db/user.schema.js";
import express from "express";

class UserController {
    async getAllUsers(req: express.Request, res: express.Response) {
        try {
            const users = await UserModel.find();
            res.status(200).json({users: users});
        } catch (e) {
            res.status(500).send({error: e});
        }
    }

    async createUser(req: express.Request, res: express.Response) {
        try {
            const user = UserModel.create(req.body)
            res.status(201).json({user});
        } catch (e) {
            res.status(500).send({error: e});
        }
    }

    async getUserById(req: express.Request, res: express.Response) {
        try {
            const {id} = req.params;
            const user = await UserModel.findById(id);
            res.status(200).json({user});
        } catch (e) {
            res.status(500).send({error: e});
        }
    }

    async updateUserById(req: express.Request, res:express.Response) {
        try {
            const {id} = req.params;
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json({user});
        } catch (e) {
            res.status(500).send({error: e});
        }
    }
}
export default new UserController();