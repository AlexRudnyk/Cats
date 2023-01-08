import styled from 'styled-components';
import Select from 'react-select';

export const BreedSelect = styled(Select)`
  width: 500px;
  margin-top: 30px;
`;

export const ImgWrapper = styled.div`
  margin-right: 50px;
`;

export const BreedsContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const BreedText = styled.p`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BreedTitle = styled.h2`
  margin-bottom: 50px;
  text-decoration: underline;
`;

export const BreedDescriptionWrapper = styled.div`
  padding: 0 50px;
  border-left: 1px solid grey;
`;
