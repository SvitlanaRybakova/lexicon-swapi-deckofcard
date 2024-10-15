import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div class="my-20 flex items-center justify-center gap-6 rounded border-t-4 border-error bg-base-200 p-6">
      <i class="fa-solid fa-bolt text-2xl text-error"></i>

      <div class="flex flex-col">
        <h3 class="font-bold">The error has been occured</h3>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ErrorAlert;
