import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db/mongoose.js";
import UserRoutes from "./routes/User.Routes.js";
import ServiceRoutes from "./routes/Service.Routes.js";
import MessageRoutes from "./routes/Message.Routes.js";
import AuthRoutes from "./routes/Auth.Routes.js";
const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(AuthRoutes);
app.use(UserRoutes);
app.use(ServiceRoutes);
app.use(MessageRoutes);

app.get("/", (req, res) => {
  const headers = new Headers({ Accept: "/lo" });
  res.setHeaders(headers);
  return res.send("hello world");
});
app.listen(port, () => {
  console.log(`server start in http://localhost:${port}`);
});
