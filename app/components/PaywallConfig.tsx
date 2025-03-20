// app/components/PaywallConfig.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onConfigChange: (config: PaywallConfig) => void;
}

interface PaywallConfig {
  pricingTier: string;
  articlesPerMonth: number;
  freePreviewPercent: number;
}

const PaywallConfig: React.FC<Props> = ({ onConfigChange }) => {
  const [pricingTier, setPricingTier] = useState<string>("basic");
  const [articlesPerMonth, setArticlesPerMonth] = useState<number>(5);
  const [freePreviewPercent, setFreePreviewPercent] = useState<number>(20);

  const handlePricingTierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPricingTier(e.target.value);
    onConfigChange({
      pricingTier: e.target.value,
      articlesPerMonth,
      freePreviewPercent,
    });
  };

  const handleArticlesPerMonthChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    setArticlesPerMonth(value);
    onConfigChange({
      pricingTier,
      articlesPerMonth: value,
      freePreviewPercent,
    });
  };

  const handleFreePreviewPercentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    setFreePreviewPercent(value);
    onConfigChange({
      pricingTier,
      articlesPerMonth,
      freePreviewPercent: value,
    });
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Paywall Configuration</h2>
      <div className="mb-4">
        <label htmlFor="pricingTier" className="block text-gray-700 text-sm font-bold mb-2">
          Pricing Tier:
        </label>
        <select
          id="pricingTier"
          value={pricingTier}
          onChange={handlePricingTierChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="articlesPerMonth"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Articles per Month:
        </label>
        <input
          type="number"
          id="articlesPerMonth"
          value={articlesPerMonth}
          onChange={handleArticlesPerMonthChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="freePreviewPercent"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Free Preview Percent:
        </label>
        <input
          type="number"
          id="freePreviewPercent"
          value={freePreviewPercent}
          onChange={handleFreePreviewPercentChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default PaywallConfig;