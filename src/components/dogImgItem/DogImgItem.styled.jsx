import styled from 'styled-components';

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid grey;
border-radius: 2px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
  transform: scale(1.03);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const DescriptionContainer = styled.div`
  padding: 10px;
`;

export const ItemText = styled.p`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
