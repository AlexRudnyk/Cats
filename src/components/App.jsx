import { DogImgGallery } from './dogImgGallery';
import { Layout } from './layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Breeds } from './breeds';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DogImgGallery />} />
          <Route path="breeds" element={<Breeds />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
