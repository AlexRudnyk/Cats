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
        {!group ? (
          <ItemText>Breed group: Unknown</ItemText>
        ) : (
          <p>Breed group: {group}</p>
        )}
      </DescriptionContainer>
    </Item>
  );
};
