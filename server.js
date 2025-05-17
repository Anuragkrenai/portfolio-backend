import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import SendEmail from "./SendEmail.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api Working Fine");
});

app.post("/sendemail", SendEmail);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`);
});
