// app/paywall-tool/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const PaywallTool = () => {
  // State for paywall configuration options
  const [pricingTier, setPricingTier] = useState("basic");
  const [contentRestriction, setContentRestriction] = useState("metered");
  const [articleLimit, setArticleLimit] = useState(5);

  // Mock "best practice" recommendations
  const bestPractices = {
    basic:
      "For a basic tier, offer limited access to articles and prioritize user experience.",
    metered:
      "Implement a metered paywall with a clear article limit. Encourage users to subscribe for unlimited access.",
    premium:
      "Offer exclusive content and features for premium subscribers. Highlight the value of premium access.",
  };

  // Function to generate recommendations based on settings
  const generateRecommendation = () => {
    switch (pricingTier) {
      case "basic":
        return bestPractices.basic;
      case "metered":
        return bestPractices.metered;
      case "premium":
        return bestPractices.premium;
      default:
        return "No recommendation available for this configuration.";
    }
  };

  const recommendation = generateRecommendation();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Paywall Configuration Tool</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Configuration Options */}
        <motion.div
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-semibold mb-4">Paywall Settings</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pricing Tier:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={pricingTier}
              onChange={(e) => setPricingTier(e.target.value)}
            >
              <option value="basic">Basic</option>
              <option value="metered">Metered</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Content Restriction:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={contentRestriction}
              onChange={(e) => setContentRestriction(e.target.value)}
            >
              <option value="metered">Metered Articles</option>
              <option value="freemium">Freemium Content</option>
            </select>
          </div>

          {contentRestriction === "metered" && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Article Limit:
              </label>
              <input
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={articleLimit}
                onChange={(e) => setArticleLimit(parseInt(e.target.value))}
              />
            </div>
          )}
        </motion.div>

        {/* Best Practice Recommendations */}
        <motion.div
          className="bg-gray-50 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Best Practice Recommendation</h2>
          <p>{recommendation}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaywallTool;