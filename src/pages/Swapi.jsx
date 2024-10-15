import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { getPeople } from '../services';
import ErrorAlert from '../components/ErrorAlert';
import InfoAlert from '../components/InfoAlert';
import Loader from '../components/Loader';
import CardItem from '../components/CardItem';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Swapi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const { data, error, isLoading, status, isPreviousData } = useQuery({
    queryKey: ['swapi_creatures', currentPage, searchText],
    queryFn: () => getPeople(currentPage, searchText),
  });

  if (status === 'error') return <ErrorAlert message={error.message} />;

  return (
    <div className="container mx-auto">
      <SearchBar setSearchText={setSearchText} setCurrentPage={setCurrentPage} />

      {isLoading && <Loader />}
      {data?.results?.length === 0 && <InfoAlert message={'Please try a different query'} />}
      <div className="align-center flex flex-wrap justify-center gap-8">
        {data?.results?.map((creature) => (
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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isPreviousData={isPreviousData}
        hasMore={data?.next}
      />
    </div>
  );
};

export default Swapi;
