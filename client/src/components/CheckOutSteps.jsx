import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const steps = ['Shipping', 'Review', 'Payment', 'Confirmation'];

const CheckOutSteps = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center mt-8 mb-6">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center text-center">
            {index < currentStep ? (
              <CheckCircleIcon className="w-6 h-6 text-green-600 mb-1" />
            ) : (
              <div
                className={`w-6 h-6 rounded-full mb-1 flex items-center justify-center text-xs font-bold ${
                  index === currentStep
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
            )}
            <span
              className={`text-sm ${
                index === currentStep ? 'font-semibold text-green-700' : 'text-gray-500'
              }`}
            >
              {step}
            </span>
          </div>

          {/* Arrow between steps */}
          {index !== steps.length - 1 && (
            <ArrowRightIcon className="w-5 h-5 mx-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckOutSteps;
