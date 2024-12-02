import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import subscriptionRouter from "@/api/routers/subscriptionRouter";

const PORT = process.env.SERVER_PORT ?? 3000; // Default to port 3000
if (!PORT) {
  throw new Error(`Unable to load PORT variable from .env`);
}

const expressApp = express();
expressApp.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "*",
  })
);

expressApp.use(express.json());
const httpServer = createServer(expressApp);

expressApp.use("/api/subscriptions", subscriptionRouter);

httpServer.listen(PORT, () => {
  console.log(`⚡[Server]: Server running on http://localhost:${PORT}`);
});
