// src/components/SubscriptionCard.tsx
import React from "react";
import { SubscriptionDataType } from "../types/subscription";

interface Props {
  plan: SubscriptionDataType;
  isCurrent: boolean;
  onUpgrade: () => void;
  onDowngrade: () => void;
}

export const SubscriptionCard: React.FC<Props> = ({
  plan,
  isCurrent,
  onUpgrade,
  onDowngrade,
}) => {
  // determine button state
  const { code } = plan;
  return (
    <div
      className={[
        "rounded-2xl border p-6 flex flex-col justify-between",
        isCurrent ? "border-blue-500 bg-blue-50" : "border-gray-300",
      ].join(" ")}
    >
      <div>
        <h3 className="text-xl font-semibold">{plan.tag}</h3>
        <p className="text-3xl font-bold">
          {plan.price}
          <span className="text-lg font-normal"> {plan.currency}</span>
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {isCurrent ? (
          <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
            Current Plan
          </span>
        ) : (
          <div className="flex flex-col space-y-2">
            <button
              onClick={onUpgrade}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Upgrade
            </button>
            <button
              onClick={onDowngrade}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              Downgrade
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
