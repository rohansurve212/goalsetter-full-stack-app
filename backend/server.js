/** @format */

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import goalRoutes from "./routes/goalRoutes.js";

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
