import express from "express";
import router from "./routes/postRoutes.js";
import { configDotenv } from "dotenv";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());




app.use('/posts', router)
app.listen(1900, ()=> console.log('server is runing at 1900'))


