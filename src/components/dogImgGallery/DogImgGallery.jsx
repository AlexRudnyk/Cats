import { DogImgItem } from 'components/dogImgItem';
import { fetchDogs } from 'components/dogsApi/DogsApi';
import { useState, useEffect } from 'react';
import { List, MoreBtn, BtnContainer } from './DogImgGallery.styled';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';

export const DogImgGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const handleLoadNextClick = () => {
    setPage(state => state + 1);
  };

  const handleLoadPrevClick = () => {
    setPage(state => state - 1);
  };

  useEffect(() => {
    async function fetchMyDogs() {
      setStatus('pending');
      try {
        const dogsArray = await fetchDogs(page);
        console.log(dogsArray);
        setDogs(dogsArray);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchMyDogs();
  }, [page]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
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
          <BtnContainer>
            {page !== 1 && (
              <MoreBtn
                onClick={handleLoadPrevClick}
                disabled={status === 'pending'}
              >
                Prev page
              </MoreBtn>
            )}

            {dogs.length === 12 && (
              <MoreBtn
                onClick={handleLoadNextClick}
                disabled={status === 'pending'}
              >
                Next page
              </MoreBtn>
            )}
          </BtnContainer>
        </>
      )}
      {status === 'rejected' && <Error />}
    </>
  );
};
