import { useState, useEffect } from 'react';
import { getBreeds, getBreedsById } from 'components/dogsApi/DogsApi';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';
import { BreedSelect, ImgWrapper } from './Breeds.styled';

export const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [dog, setDog] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchBreeds() {
      setStatus('pending');
      try {
        const myBreeds = await getBreeds();
        setBreeds(myBreeds);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchBreeds();
  }, []);

  const options = breeds.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  useEffect(() => {
    if (selectedBreed === null) return;
    setStatus('pending');

    async function fetchBreedById() {
      try {
        const breedById = await getBreedsById(selectedBreed);
        setDog(breedById[0]);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchBreedById();
  }, [selectedBreed]);

  return (
    <div>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <>
          {options.length > 0 && (
            <BreedSelect
              options={options}
              onChange={option => setSelectedBreed(option.value)}
            />
          )}
          {dog.length !== 0 && (
            <ImgWrapper>
              <img src={dog.url} alt="dog" width="700" />
            </ImgWrapper>
          )}
        </>
      )}
      {status === 'rejected' && <Error />}
    </div>
  );
};
