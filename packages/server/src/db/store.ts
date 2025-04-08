import { SubscriptionDataType } from "@/types";

const subscriptions: SubscriptionDataType[] = [
  { price: 0, code: "Free", tag: "Start for free", currency: "USD" },
  { price: 99, code: "T1", tag: "Individual pack", currency: "USD" },
  { price: 499, code: "T2", tag: "Startup pack", currency: "USD" },
  {
    price: "Contact Sales",
    code: "Enterprise",
    tag: "Enterprise pack",
    currency: "USD",
  },
];

let currentSubscription: SubscriptionDataType = subscriptions[0];

const store = {
  getSubscriptions() {
    return subscriptions;
  },
  getCurrentSubscription() {
    return currentSubscription;
  },
  setCurrentSubscription(newSubscriptionCode: string) {
    const sub = subscriptions.find((d) => d.code === newSubscriptionCode);
    if (sub) {
      currentSubscription = sub;
    }
  },
};

export default store;
