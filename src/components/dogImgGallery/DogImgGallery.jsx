import { DogImgItem } from 'components/dogImgItem';
import { fetchDogs } from 'components/dogsApi/DogsApi';
import { useState, useEffect } from 'react';
import { List } from './DogImgGallery.styled';

export const DogImgGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(1);

  const handleLoadMoreClick = () => {
    setPage(state => state + 1);
  };

  useEffect(() => {
    async function fetchMyDogs() {
      try {
        const dogsArray = await fetchDogs(page);
        console.log(dogsArray);
        setDogs(dogsArray);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyDogs();
  }, [page]);

  return (
    <>
      <List>
        {dogs.map(({ id, image, name, breed_group }) => (
          <DogImgItem
            key={id}
            img={image.url}
            name={name}
            group={breed_group}
          />
        ))}
      </List>
      <button onClick={handleLoadMoreClick}>Load more</button>
    </>
  );
};
