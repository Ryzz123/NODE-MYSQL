import express from "express";
import cors from "cors";
import MahasiswaRouter from "./routes/MahasiswaRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MahasiswaRouter);

app.listen(8080, () => console.log("Server running......"));