import express from "express";
import bodyParser from "body-parser";
import initAppRoutes from "./routes/index";
import redis, { connectRedis } from "./redis";
import { connectMongo } from './mongo/';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initAppRoutes(app);
app.use((req, res) => {
    return res.send("404 not found");
});
//connect mongo
connectMongo()

// connect redis
connectRedis()

app.listen(PORT, () => {
    console.log(`Server is running on the PORT: ${PORT}`);
});
