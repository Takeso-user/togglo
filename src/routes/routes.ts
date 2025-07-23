import express from 'express';
import taskController from '../controllers/task.controller.js';
import timelog from '../controllers/timelog.controller.js';
import userModel from "../controllers/user.controller.js"
const router = express.Router();


router.get('/', (req, res) => {
    res.send({healthcheck: 'ok'});
});

router.get('/api/v1/task/', taskController.getAllTasks)
router.get('/api/v1/task/:id', taskController.getTaskById)
router.delete('/api/v1/task/:id', taskController.deleteTaskById)

router.get("/api/v1/timelog/:id", timelog.getTimeLogById )
router.put("/api/v1/timelog/",timelog.createTimelog)

router.get("/api/v1/user/",userModel.getAllUsers )
router.get("/api/v1/user/:id",userModel.getUserById )
router.put("/api/v1/user/",userModel.createUser)
router.post("/api/v1/user/:id",userModel.updateUserById)
export default router;