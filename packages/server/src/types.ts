export interface SubscriptionDataType {
  price: number;
  code: string;
  tag: string;
  currency: string;
}

export type GetSubscriptionsListApiResponse =
  | {
      status: "success";
      data: SubscriptionDataType[];
    }
  | {
      status: "failure";
      error: string;
    };

export type GetCurrentSubscriptionApiResponse =
  | {
      status: "success";
      data: SubscriptionDataType;
    }
  | {
      status: "failure";
      error: string;
    };

export type UpradeSubscriptionApiResponse =
  | {
      status: "success";
      subscription: SubscriptionDataType;
      message: string;
    }
  | {
      status: "failure";
      error: string;
    };

export type DowngradeSubscriptionApiResponse =
  | {
      status: "success";
      subscription: SubscriptionDataType;
      message: string;
    }
  | {
      status: "failure";
      error: string;
    };
