import React, { useState } from 'react';
import { drawCard } from '../api/deckofcards';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

const Deckofcards = () => {
  const { data, refetch, error, isLoading, status, isPreviousData } = useQuery({
    queryKey: ['swapi_creatures'],
    queryFn: () => drawCard(),
    enabled: false, // Disable automatic refetching
  });

  return (
    <div>
      <h1>deck of cards api</h1>
      <button
        onClick={() => {
          refetch();
        }}
      >
        Some Button
      </button>
      ;
    </div>
  );
};

export default Deckofcards;
