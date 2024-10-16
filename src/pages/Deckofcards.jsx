import React, { useState } from 'react';
import { drawCard } from '../api/deckofcards';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../components/Loader';

const Deckofcards = () => {
  const { data, refetch, error, isLoading, status, isPreviousData } = useQuery({
    queryKey: ['swapi_creatures'],
    queryFn: () => drawCard(),
    enabled: false, // Disable automatic refetching
  });

  if (status === 'error') return <ErrorAlert message={error.message} />;

  return (
    <div>
      <button
        onClick={() => {
          refetch();
        }}
        className="btn my-20"
      >
        Draw the card
      </button>
      {isLoading && <Loader />}
      {data?.cards?.length === 0 && <InfoAlert message={'Please try drawing a card again'} />}
      {data?.cards?.map((card) => (
        <div className="flex justify-center" key={uuidv4()}>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={card.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-primary">
                {card.value} of {card.suit}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deckofcards;
