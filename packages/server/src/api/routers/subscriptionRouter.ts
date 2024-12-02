import express from "express";
import {
  getSubscriptionsList,
  upgradeSubscription,
  downgradeSubscription,
  getCurrentSubscriptionDetails,
} from "@/api/controller/subscriptionController";

const subscriptionRouter = express.Router();

subscriptionRouter.get("/", getSubscriptionsList);
subscriptionRouter.get("/current", getCurrentSubscriptionDetails);
subscriptionRouter.post("/upgrade", upgradeSubscription);
subscriptionRouter.post("/downgrade", downgradeSubscription);

export default subscriptionRouter;
