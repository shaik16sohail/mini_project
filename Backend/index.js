import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/userRoute.js";
import complaintRouter from "./routes/complaintRoute.js";
import placesRouter from "./routes/placesRoute.js";
import eventRouter from "./routes/eventRoute.js";
import userViewRouter from "./routes/userViewRoutes.js";
import representative from "./routes/representativeRoute.js";
import tenderRoute from "./routes/tenderRoutes.js";
import viewTenderRoute from "./routes/viewTenderRoute.js";
import reviewRoute from "./routes/reviewRoutes.js";
import appointmentRoute from "./routes/appointmentRoute.js";
dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is Running..." });
});

app.use("/api/user", userRouter);
app.use("/api/complaints", complaintRouter);
app.use("/admin/places", placesRouter);
app.use("/admin/events", eventRouter);
app.use("/representatives/view", userViewRouter);
app.use("/admin/addRepresentative", representative);
app.use("/admin/tenders", tenderRoute);
app.use("/api/tenders", viewTenderRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/appointments", appointmentRoute);
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is Running...");
    });
  })
  .catch(() => {
    console.log("Internal Server Error");
  });
