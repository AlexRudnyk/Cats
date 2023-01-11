import { useState, useEffect } from 'react';
import {
  getBreeds,
  getBreedsById,
  getInfoById,
} from 'components/dogsApi/DogsApi';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';
import {
  BreedSelect,
  ImgWrapper,
  BreedsContainer,
  BreedText,
  BreedTitle,
  BreedDescriptionWrapper,
  BreedsWrapper,
  BreedImg,
  SearchImgWrapper,
} from './Breeds.styled';

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

  return (
    <BreedsWrapper>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <>
          {options.length > 0 && (
            <BreedSelect
              options={options}
              onChange={option => setSelectedBreed(option.value)}
            />
          )}
          <BreedsContainer>
            {dog.length === 0 && <SearchImgWrapper></SearchImgWrapper>}
            {dog.length !== 0 && (
              <ImgWrapper>
                <BreedImg src={dog.url} alt={dog.name} />
              </ImgWrapper>
            )}
            {breedInfo && (
              <BreedDescriptionWrapper>
                <BreedTitle>Dog's breed details</BreedTitle>
                {breedInfo.name && (
                  <BreedText>
                    My breed is: <strong>{breedInfo.name}</strong>
                  </BreedText>
                )}
                {breedInfo.breed_group && (
                  <BreedText>
                    I am from <strong>{breedInfo.breed_group}</strong> family of
                    breeds
                  </BreedText>
                )}
                {breedInfo.origin && (
                  <BreedText>
                    My home is: <strong>{breedInfo.origin}</strong>
                  </BreedText>
                )}
                <BreedText>
                  My height is: <strong>{breedInfo.height.metric}</strong>{' '}
                  centimeters
                </BreedText>
                {breedInfo.weight.metric && (
                  <BreedText>
                    My weight is: <strong>{breedInfo.weight.metric}</strong>{' '}
                    kilograms
                  </BreedText>
                )}
                {breedInfo.temperament && (
                  <BreedText>
                    I am <strong>{breedInfo.temperament}</strong>
                  </BreedText>
                )}
                {breedInfo.life_span && (
                  <BreedText>
                    and will make you happy{' '}
                    <strong>{breedInfo.life_span}</strong>
                  </BreedText>
                )}
              </BreedDescriptionWrapper>
            )}
          </BreedsContainer>
        </>
      )}
      {status === 'rejected' && <Error />}
    </BreedsWrapper>
  );
};
