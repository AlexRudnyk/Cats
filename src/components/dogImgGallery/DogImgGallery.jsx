import { DogImgItem } from 'components/dogImgItem';
import { getDogs } from 'components/dogsApi/DogsApi';
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
    async function fetchDogs() {
      setStatus('pending');
      try {
        const dogsArray = await getDogs(page);
        setDogs(dogsArray);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchDogs();
  }, [page]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {status === 'resolved' && (
        <>
          <List>
            {dogs.map(
              ({
                id,
                image,
                name,
                breed_group,
                bred_for,
                height,
                life_span,
                temperament,
                weight,
              }) => (
                <DogImgItem
                  key={id}
                  img={image.url}
                  name={name}
                  group={breed_group}
                  skill={bred_for}
                  height={height.metric}
                  life={life_span}
                  temperament={temperament}
                  weight={weight.metric}
                />
              )
            )}
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
