import React from "react";
import {useLocation} from 'react-router-dom';

function Step5() {
  const {isSuccess,error} = useLocation().state;
  return <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="max-w-md p-8 bg-white rounded-md shadow-md">
    {isSuccess ? (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Form Submitted Successfully!</h2>
        <p className="text-gray-700 mb-6">Thank you for your submission.</p>
        <p className="text-gray-600">We will review your information and get back to you soon.</p>
      </div>
    ) : (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Form Submission Failed!</h2>
        <p className="text-red-500 mb-6">Error: {error}</p>
        <p className="text-gray-600">Please try again later or contact our support team for assistance.</p>
      </div>
    )}
  </div>
</div>;
}

export default Step5;
