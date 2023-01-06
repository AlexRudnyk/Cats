import { useState } from 'react';
import { DogImgGallery } from './dogImgGallery';

export const App = () => {
  const [page, setPage] = useState(1);
  const handleLoadMoreClick = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <header>Header</header>
      <DogImgGallery page={page} />
      <button onClick={handleLoadMoreClick}>Load more</button>
      <footer>Footer</footer>
    </>
  );
};
