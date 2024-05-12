import React from 'react';

const MobileError = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Oops!</h2>
        <p className="text-gray-700">This app is optimized for desktop use only.</p>
      </div>
    </div>
  );
};

export default MobileError;
