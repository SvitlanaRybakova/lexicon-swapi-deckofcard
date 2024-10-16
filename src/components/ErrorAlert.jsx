import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div className="my-20 flex items-center justify-center gap-6 rounded border-t-4 border-error bg-base-200 p-6">
      <i className="fa-solid fa-bolt text-2xl text-error"></i>

      <div className="flex flex-col">
        <h3 className="font-bold">The error has been occured</h3>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ErrorAlert;
