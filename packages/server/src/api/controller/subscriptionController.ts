import { type Request, type Response } from "express";

import store from "@/db/store";
import { shouldApiFail } from "@/utility/shouldApiFail";
import { assertTruthy } from "@/utility/assertTruthy";
import { FAILURE_RATE_GET_SUBSCRIPTIONS_API } from "@/constants/apiFailureProbability";
import {
  DowngradeSubscriptionApiResponse,
  UpgradeSubscriptionApiResponse,
  type GetCurrentSubscriptionApiResponse,
  type GetSubscriptionsListApiResponse,
} from "@/types";

export const getSubscriptionsList = (
  req: Request,
  res: Response<GetSubscriptionsListApiResponse>
): void => {
  try {
    assertTruthy(req.method === "GET", {
      code: 405,
      error: "Method Not Allowed",
    });
    assertTruthy(shouldApiFail(FAILURE_RATE_GET_SUBSCRIPTIONS_API), {
      code: 500,
      error: "An unexpected error occurred while fetching subscriptions",
    });
    const subscriptions = store.getSubscriptions();
    res.status(200).json({ status: "success", data: subscriptions });
  } catch (e) {
    // [Note]: JSON Parsing can fail if error arise other than `assertTruthy`
    // Can be moved to helper function to return error
    const { code, error } = JSON.parse((e as Error).message);
    res.status(code ?? 500).json({
      status: "failure",
      error: error ?? "Internal Server Error",
    });
  }
};

export const getCurrentSubscriptionDetails = (
  req: Request,
  res: Response<GetCurrentSubscriptionApiResponse>
): void => {
  try {
    assertTruthy(req.method === "GET", {
      code: 405,
      error: "Method Not Allowed",
    });
    const currentSubscription = store.getCurrentSubscription();
    res.status(200).json({ status: "success", data: currentSubscription });
  } catch (e) {
    // [Note]: JSON Parsing can fail if error arise other than `assertTruthy`
    // Can be moved to helper function to return error
    const { code, error } = JSON.parse((e as Error).message);
    res.status(code ?? 500).json({
      status: "failure",
      error: error ?? "Internal Server Error",
    });
  }
};

export const upgradeSubscription = (
  req: Request,
  res: Response<UpgradeSubscriptionApiResponse>
): void => {
  try {
    assertTruthy(req.method === "POST", {
      code: 404,
      error: "Method Not Allowed",
    });

    const { code } = req.body as { code: string };

    assertTruthy(code, { code: 422, error: "Unprocessable entity" });

    const subscriptions = store.getSubscriptions();
    const selectedSubscription = subscriptions.find((sub) => sub.code === code);

    assertTruthy(selectedSubscription, {
      code: 422,
      error: "Subscription code not found",
    });

    const currentSubscription = store.getCurrentSubscription();
    const selectedSubscriptionIndex = subscriptions.findIndex(
      (sub) => sub.code === selectedSubscription.code
    );
    const currentSubscriptionIndex = subscriptions.findIndex(
      (sub) => sub.code === currentSubscription.code
    );

    assertTruthy(currentSubscriptionIndex < selectedSubscriptionIndex, {
      code: 422,
      error: "Cannot upgrade to a lower or equal tier pack",
    });

    store.setCurrentSubscription(selectedSubscription.code);

    res.status(200).json({
      status: "success",
      message: "Subscription upgraded successfully",
      subscription: selectedSubscription,
    });
  } catch (e) {
    // [Note]: JSON Parsing can fail if error arise other than `assertTruthy`
    // Can be moved to helper function to return error
    const { code, error } = JSON.parse((e as Error).message);
    res.status(code ?? 500).json({
      status: "failure",
      error: error ?? "Internal Server Error",
    });
  }
};

export const downgradeSubscription = (
  req: Request,
  res: Response<DowngradeSubscriptionApiResponse>
): void => {
  try {
    assertTruthy(req.method === "POST", {
      code: 404,
      error: "Method Not Allowed",
    });

    const { code } = req.body as { code: string };

    assertTruthy(code, { code: 422, error: "Unprocessable entity" });

    const subscriptions = store.getSubscriptions();
    const selectedSubscription = subscriptions.find((sub) => sub.code === code);

    assertTruthy(selectedSubscription, {
      code: 422,
      error: "Subscription code not found",
    });

    const currentSubscription = store.getCurrentSubscription();
    const selectedSubscriptionIndex = subscriptions.findIndex(
      (sub) => sub.code === selectedSubscription.code
    );
    const currentSubscriptionIndex = subscriptions.findIndex(
      (sub) => sub.code === currentSubscription.code
    );

    assertTruthy(currentSubscriptionIndex > selectedSubscriptionIndex, {
      code: 422,
      error: "Cannot downgrade to a higher or equal tier pack",
    });

    store.setCurrentSubscription(selectedSubscription.code);

    res.status(200).json({
      status: "success",
      message: "Subscription downgraded successfully",
      subscription: selectedSubscription,
    });
  } catch (e) {
    // [Note]: JSON Parsing can fail if error arise other than `assertTruthy`
    // Can be moved to helper function to return error
    const { code, error } = JSON.parse((e as Error).message);
    res.status(code ?? 500).json({
      status: "failure",
      error: error ?? "Internal Server Error",
    });
  }
};
