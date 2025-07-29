export interface SubscriptionDataType {
  price: number | string;
  code: string;
  tag: string;
  currency: string;
}

export interface ApiFailureType {
  status: "failure";
  error: string;
}

export interface GetSubscriptionsListApiResponse {
  status: "success";
  data: SubscriptionDataType[];
}

export interface GetCurrentSubscriptionApiResponse {
  status: "success";
  data: SubscriptionDataType;
}

export interface ChangeSubscriptionBody {
  code: string;
}

export interface UpgradeSubscriptionApiResponse {
  status: "success";
  message: string;
  subscription: SubscriptionDataType;
}

export interface DowngradeSubscriptionApiResponse {
  status: "success";
  message: string;
  subscription: SubscriptionDataType;
}
