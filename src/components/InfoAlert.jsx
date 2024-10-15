import React from 'react';

const InfoAlert = ({ message }) => {
  return (
    <div class="my-20 flex items-center justify-center gap-6 rounded border-t-4 border-info bg-base-200 p-6">
      <i class="fa-solid fa-circle-info text-2xl text-info"></i>

      <div class="flex flex-col">
        <h3 class="font-bold">No results found for your search</h3>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default InfoAlert;
