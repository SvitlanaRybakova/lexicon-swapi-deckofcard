import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { getPeople } from '../services';
import ErrorAlert from '../components/ErrorAlert';
import Loader from '../components/Loader';
import CardItem from '../components/CardItem';

const Swapi = () => {
  const { data, error, isLoading, status } = useQuery({
    queryKey: ['swapi_creatures'],
    queryFn: () => getPeople(),
  });

  console.log('data', data);

  return (
    <div className="container mx-auto">
      {status === 'error' && <ErrorAlert message={error.message} />}
      {isLoading && <Loader />}
      {data?.length === 0 && <InfoAlert message={'No matches'} />}
      <div className="align-center flex flex-wrap justify-center gap-8">
        {data?.map((creature) => (
          <div key={uuidv4()}>
            <CardItem
              name={creature.name}
              birth_year={creature.birth_year}
              eye_color={creature.eye_color}
              gender={creature.gender}
              hair_color={creature.gender}
              skin_color={creature.skin_color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swapi;
