import { useState, useEffect } from 'react';
import {
  getBreeds,
  getBreedsById,
  getInfoById,
} from 'components/dogsApi/DogsApi';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';
import { BreedSelect, ImgWrapper } from './Breeds.styled';

export const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [dog, setDog] = useState([]);
  const [status, setStatus] = useState('idle');
  const [breedInfo, setBreedInfo] = useState(null);

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

  useEffect(() => {
    if (selectedBreed === null) return;
    setStatus('pending');

    async function fetchInfoById() {
      try {
        const infoById = await getInfoById(selectedBreed);
        setBreedInfo(infoById);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchInfoById();
  }, [selectedBreed]);

  console.log('BREED INFO: ', breedInfo);

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
              <img src={dog.url} alt="dog" width="500" />
            </ImgWrapper>
          )}
          {breedInfo && (
            <>
              <h2>Dog's breed details</h2>
              <p>
                My breed is: <strong>{breedInfo.name}</strong>
              </p>
              <p>
                I am from <strong>{breedInfo.breed_group}</strong> family of
                breeds
              </p>
              {breedInfo.origin && (
                <p>
                  My home is: <strong>{breedInfo.origin}</strong>
                </p>
              )}
              <p>
                My height is: <strong>{breedInfo.height.metric}</strong>{' '}
                centimeters
              </p>
              <p>
                My weight is: <strong>{breedInfo.weight.metric}</strong>{' '}
                kilograms
              </p>
              <p>
                I am <strong>{breedInfo.temperament}</strong>
              </p>
              <p>
                and will make you happy <strong>{breedInfo.life_span}</strong>
              </p>
            </>
          )}
        </>
      )}
      {status === 'rejected' && <Error />}
    </div>
  );
};
