import { Item, Image } from './DogImgItem.styled';

export const DogImgItem = ({ img, name }) => {
  return (
    <Item>
      <Image src={img} alt={name} />
      <p>{name}</p>
    </Item>
  );
};
