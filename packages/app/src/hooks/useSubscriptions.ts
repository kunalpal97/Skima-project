import { useState, useEffect, useCallback } from "react";
import {
  getAllSubscriptions,
  getCurrentSubscription,
  upgradeSubscription,
  downgradeSubscription,
} from "../api/api";
import { SubscriptionDataType } from "../types/subscription";

export function useSubscriptions() {
  const [plans, setPlans] = useState<SubscriptionDataType[] | null>(null);
  const [current, setCurrent] = useState<SubscriptionDataType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [all, curr] = await Promise.all([
        getAllSubscriptions(),
        getCurrentSubscription(),
      ]);
      setPlans(all);
      setCurrent(curr);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const upgrade = async (code: string) => {
    setLoading(true);
    setError(null);
    try {
      await upgradeSubscription(code);
      await fetchData();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const downgrade = async (code: string) => {
    setLoading(true);
    setError(null);
    try {
      await downgradeSubscription(code);
      await fetchData();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    plans,
    current,
    loading,
    error,
    refresh: fetchData,
    upgrade,
    downgrade,
  };
}
