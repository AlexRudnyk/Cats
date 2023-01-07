import {
  Item,
  Image,
  DescriptionContainer,
  ItemText,
} from './DogImgItem.styled';

export const DogImgItem = ({ img, name, group }) => {
  return (
    <Item>
      <Image src={img} alt={name} />
      <DescriptionContainer>
        <ItemText>{name}</ItemText>
        {!group ? <p>Breed group: Unknown</p> : <p>Breed group: {group}</p>}
      </DescriptionContainer>
    </Item>
  );
};
