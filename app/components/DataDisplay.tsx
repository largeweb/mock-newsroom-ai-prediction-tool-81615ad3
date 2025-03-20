// app/components/DataDisplay.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  data: any;
  title: string;
}

const DataDisplay: React.FC<Props> = ({ data, title }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

      {data ? (
        <div>
          {typeof data === 'string' || typeof data === 'number' ? (
            <p className="text-gray-700">{data}</p>
          ) : (
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      ) : (
        <p className="text-gray-500">No data to display.</p>
      )}
    </motion.div>
  );
};

export default DataDisplay;