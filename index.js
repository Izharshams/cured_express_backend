import express from "express";
import router from "./routes/postRoutes.js";
import { configDotenv } from "dotenv";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());




app.use('/posts', router)
const PORT = process.env.PORT || 1900;
app.listen(PORT, ()=> console.log('server is runing at ', PORT))


