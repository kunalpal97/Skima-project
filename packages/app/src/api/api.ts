import {
  SubscriptionDataType,
  ApiFailureType,
  GetSubscriptionsListApiResponse,
  GetCurrentSubscriptionApiResponse,
  UpgradeSubscriptionApiResponse,
  DowngradeSubscriptionApiResponse,
} from "../types/subscription";

const BASE_URL = "http://localhost:3000/api/subscriptions";

async function handleResponse<T>(res: Response): Promise<T> {
  const payload = (await res.json()) as T | ApiFailureType;
  if ((payload as ApiFailureType).status === "failure") {
    throw new Error((payload as ApiFailureType).error);
  }
  return payload as T;
}

export async function getAllSubscriptions(): Promise<SubscriptionDataType[]> {
  const res = await fetch(BASE_URL);
  const body = await handleResponse<GetSubscriptionsListApiResponse>(res);
  return body.data;
}

export async function getCurrentSubscription(): Promise<SubscriptionDataType> {
  const res = await fetch(`${BASE_URL}/current`);
  const body = await handleResponse<GetCurrentSubscriptionApiResponse>(res);
  return body.data;
}

export async function upgradeSubscription(
  code: string
): Promise<SubscriptionDataType> {
  const res = await fetch(`${BASE_URL}/upgrade`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  const body = await handleResponse<UpgradeSubscriptionApiResponse>(res);
  return body.subscription;
}

export async function downgradeSubscription(
  code: string
): Promise<SubscriptionDataType> {
  const res = await fetch(`${BASE_URL}/downgrade`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  const body = await handleResponse<DowngradeSubscriptionApiResponse>(res);
  return body.subscription;
}
