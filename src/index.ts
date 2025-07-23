import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/routes.js";

const app = express();
app.use(express.json());

mongoose.connect(MONGO_URL, {
    dbName: dbAtlasName,
}).then(
    () => console.log('connected to db')
).catch(
    (err) => console.log(err)
);

app.use("/", router)
app.listen(8888, () => console.log('server is running'))