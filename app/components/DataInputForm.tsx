// app/components/DataInputForm.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onSubmit: (data: any) => void;
}

const DataInputForm: React.FC<Props> = ({ onSubmit }) => {
  const [numSubscribers, setNumSubscribers] = useState("");
  const [churnRate, setChurnRate] = useState("");
  const [avgArticleViews, setAvgArticleViews] = useState("");
  const [conversionRate, setConversionRate] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      numSubscribers,
      churnRate,
      avgArticleViews,
      conversionRate,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="numSubscribers" className="block text-sm font-medium text-gray-700">
          Number of Subscribers
        </label>
        <input
          type="number"
          id="numSubscribers"
          value={numSubscribers}
          onChange={(e) => setNumSubscribers(e.target.value)}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="e.g., 1000"
          required
        />
      </div>

      <div>
        <label htmlFor="churnRate" className="block text-sm font-medium text-gray-700">
          Churn Rate (%)
        </label>
        <input
          type="number"
          id="churnRate"
          value={churnRate}
          onChange={(e) => setChurnRate(e.target.value)}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="e.g., 10"
          required
        />
      </div>

      <div>
        <label htmlFor="avgArticleViews" className="block text-sm font-medium text-gray-700">
          Average Article Views
        </label>
        <input
          type="number"
          id="avgArticleViews"
          value={avgArticleViews}
          onChange={(e) => setAvgArticleViews(e.target.value)}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="e.g., 5"
          required
        />
      </div>

      <div>
        <label htmlFor="conversionRate" className="block text-sm font-medium text-gray-700">
          Conversion Rate (%)
        </label>
        <input
          type="number"
          id="conversionRate"
          value={conversionRate}
          onChange={(e) => setConversionRate(e.target.value)}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="e.g., 2"
          required
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit Data
      </button>
    </form>
  );
};

export default DataInputForm;