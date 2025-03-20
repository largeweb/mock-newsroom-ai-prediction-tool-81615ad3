// app/data-input/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import DataInputForm from "@/components/DataInputForm";

const DataInputPage = () => {
  const [numSubscribers, setNumSubscribers] = useState<number>(1000);
  const [churnRate, setChurnRate] = useState<number>(0.05);
  const [avgArticleViews, setAvgArticleViews] = useState<number>(10);
  const [conversionRate, setConversionRate] = useState<number>(0.01);

  const generateRandomData = () => {
    setNumSubscribers(Math.floor(Math.random() * 5000) + 500);
    setChurnRate(parseFloat((Math.random() * 0.1).toFixed(2)));
    setAvgArticleViews(Math.floor(Math.random() * 20) + 5);
    setConversionRate(parseFloat((Math.random() * 0.05).toFixed(2)));
  };

  const handleSubmit = (data: any) => {
    // In a real application, you might send this data to an API.
    console.log("Form submitted with data:", data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Newsroom Data Input
          </h1>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              {/* Form using the DataInputForm component.  We need to pass the setters to the individual form fields */}
              <DataInputForm
                onSubmit={handleSubmit}
                numSubscribers={numSubscribers}
                setNumSubscribers={setNumSubscribers}
                churnRate={churnRate}
                setChurnRate={setChurnRate}
                avgArticleViews={avgArticleViews}
                setAvgArticleViews={setAvgArticleViews}
                conversionRate={conversionRate}
                setConversionRate={setConversionRate}
              />
            </div>
            <div className="pt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateRandomData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Generate Random Data
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataInputPage;