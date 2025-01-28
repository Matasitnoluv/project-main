
import { masterbox } from "./../node_modules/.prisma/client/index.d";
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { pino } from "pino";
import { PrismaClient } from "@prisma/client";
import { env } from "@common/utils/envConfig";
import errorHandler from "@common/middleware/errorHandler";

import { categoryRouter } from "@modules/categories/categoryRouter";
import { msboxRouter } from "@modules/msbox/msboxRouter";
import { userRouter } from "@modules/user/userRouter";
import { msproductRouter } from "@modules/msproduct/msproductRouter";
import { cal_msboxRouter } from "@modules/cal_msbox/cal_msboxRouter";
import { cal_msproductRouter } from "@modules/cal_msproduct/cal_msproductRouter";
import { authRouter } from "@modules/auth/authRouter";
// import cookieParser from 'cookie-parser';

const prisma = new PrismaClient();
const logger = pino({ name: "server start" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());

// Routes
app.use("/v1/category", categoryRouter);
app.use("/v1/msbox", msboxRouter);
app.use("/v1/users", userRouter);
app.use("/v1/msproduct", msproductRouter);
app.use("/v1/cal_msbox", cal_msboxRouter);
app.use("/v1/cal_msproduct", cal_msproductRouter);
app.use("/v1/auth", authRouter);
// Error handlers
app.use(errorHandler());

// Add cookieParser middleware
// app.use(cookieParser());

export { app, logger };

