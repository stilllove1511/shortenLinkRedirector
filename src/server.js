import express from "express";
import bodyParser from "body-parser";
import initAppRoutes from "./routes/index";
import { connectRedis } from "./redis";
import { connectMongo } from './mongo/';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', './src/views');
initAppRoutes(app);
app.use((req, res) => {
    return res.send("404 not found");
});
//connect mongo
connectMongo()

// connect redis
connectRedis()

app.listen(PORT,async () => {
    console.log(`Server is running on the PORT: ${PORT}`);
});
