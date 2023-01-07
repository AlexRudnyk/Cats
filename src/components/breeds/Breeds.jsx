import { useState, useEffect } from 'react';
import { fetchBreeds } from 'components/dogsApi/DogsApi';
import Select from 'react-select';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';

export const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMyBreeds() {
      setStatus('pending');
      try {
        const myBreeds = await fetchBreeds();
        setBreeds(myBreeds);
        setStatus('resolved');
        console.log('BREEDS: ', myBreeds);
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchMyBreeds();
  }, []);

  const options = breeds.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <div>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <>{options.length > 0 && <Select options={options} />}</>
      )}
      {status === 'rejected' && <Error />}
    </div>
  );
};
