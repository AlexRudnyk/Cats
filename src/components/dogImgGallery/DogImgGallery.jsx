import { DogImgItem } from 'components/dogImgItem';
import { fetchDogs } from 'components/dogsApi/DogsApi';
import { useState, useEffect } from 'react';
import { List } from './DogImgGallery.styled';

export const DogImgGallery = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchMyDogs() {
      try {
        const item = await fetchDogs();
        setDogs(item);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyDogs();
  }, []);

  return (
    <List>
      {dogs.map(dog => (
        <DogImgItem key={dog.id} img={dog.image.url} name={dog.name} />
      ))}
    </List>
  );
};
