import { SubscriptionDataType } from "@/types";

const subscriptions: SubscriptionDataType[] = [
  { price: 0, code: "Free", tag: "Start for free", currency: "USD" },
  { price: 99, code: "T1", tag: "Individual pack", currency: "USD" },
  { price: 499, code: "T2", tag: "Startup pack", currency: "USD" },
  { price: 999, code: "Premium", tag: "Enterprice pack", currency: "USD" },
];

let currentSubscription: SubscriptionDataType = subscriptions[0];

const store = {
  getSubscriptions() {
    return subscriptions.sort((a, b) => a.price - b.price);
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
