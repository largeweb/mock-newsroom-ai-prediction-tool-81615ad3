// app/subscription-predictions/page.tsx
"use client";

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import DataDisplay from "@/components/DataDisplay";
// Import the DataContext - you will need to create this context
import { DataContext } from "@/app/DataContext"; // Assuming DataContext exists

// Mock data visualization components (replace with actual chart/graph components)
const MockChart = ({ title }: { title: string }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    {title} (Mock Chart)
  </div>
);

// Mock subscription logic function
const generateMockPredictions = (
  numSubscribers: number,
  churnRate: number
): { atRisk: number; likelyToCancel: number } => {
  //Some basic logic, churnRate will drive most cancellation
  const atRiskPercentage = Math.min(churnRate * 2, 0.5);
  const likelyToCancelPercentage = Math.min(churnRate * 0.8, 0.3);

  const atRisk = Math.floor(numSubscribers * atRiskPercentage);
  const likelyToCancel = Math.floor(numSubscribers * likelyToCancelPercentage);

  return { atRisk, likelyToCancel };
};

export default function SubscriptionPredictionsPage() {
  // Access data from the DataContext (assuming it exists)
  const { numSubscribers, churnRate } = useContext(DataContext);

  // Use local state or receive props for the generated data
  const [predictions, setPredictions] = useState(() =>
    generateMockPredictions(numSubscribers, churnRate)
  );

  // Mock data or calculations for predictions
  const data = [
    {
      title: "Subscribers at Risk",
      value: predictions.atRisk,
    },
    {
      title: "Subscribers Likely to Cancel",
      value: predictions.likelyToCancel,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Subscription Cancellation Predictions
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <DataDisplay data={item.value} title={item.title} />
          </motion.div>
        ))}

        <div className="md:col-span-2">
          <MockChart title="Cancellation Trends" />
        </div>
      </div>
    </div>
  );
}