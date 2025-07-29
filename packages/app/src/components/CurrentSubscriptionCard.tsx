// src/components/CurrentSubscriptionCard.tsx
import React from "react";
import { SubscriptionDataType } from "../types/subscription";

interface Props {
  plan: SubscriptionDataType;
}

export const CurrentSubscriptionCard: React.FC<Props> = ({ plan }) => {
  return (
    <div className="border-2 border-blue-500 rounded-2xl p-6 bg-blue-50 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{plan.tag}</h2>
        <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
          Current Plan
        </span>
      </div>
      <div className="text-4xl font-bold">
        {plan.price}
        <span className="text-lg font-normal"> {plan.currency}</span>
      </div>
    </div>
  );
};
