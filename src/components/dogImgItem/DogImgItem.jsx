import { useState } from 'react';
import { Modal } from 'components/modal';
import { VscChromeClose } from 'react-icons/vsc';
import {
  Item,
  Image,
  DescriptionContainer,
  ItemText,
  ModalContentWrapper,
  ModalImg,
  ModalDetailsWrapper,
  BreedTitle,
  BreedText,
  Button,
  ModalImgWrapper,
} from './DogImgItem.styled';

export const DogImgItem = ({
  img,
  name,
  group,
  skill,
  height,
  life,
  temperament,
  weight,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Item onClick={toggleModal}>
        <Image src={img} alt={name} />
        <DescriptionContainer>
          <ItemText>{name}</ItemText>
          {!group ? <p>Breed group: Unknown</p> : <p>Breed group: {group}</p>}
        </DescriptionContainer>
      </Item>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Button type="button" onClick={toggleModal}>
            <VscChromeClose />
          </Button>
          <ModalContentWrapper>
            <ModalImgWrapper>
              <ModalImg src={img} alt={name} />
            </ModalImgWrapper>
            <ModalDetailsWrapper>
              <BreedTitle>Dog's breed details</BreedTitle>
              {name && (
                <BreedText>
                  My breed is: <strong>{name}</strong>
                </BreedText>
              )}
              {group && (
                <BreedText>
                  I am from <strong>{group}</strong> family of breeds
                </BreedText>
              )}
              {skill && (
                <BreedText>
                  I am good at <strong>{skill}</strong>
                </BreedText>
              )}
              {height && (
                <BreedText>
                  My height is: <strong>{height}</strong> centimeters
                </BreedText>
              )}
              {weight && (
                <BreedText>
                  My weight is: <strong>{weight}</strong> kilograms
                </BreedText>
              )}
              {temperament && (
                <BreedText>
                  I am <strong>{temperament}</strong>
                </BreedText>
              )}
              {life && (
                <BreedText>
                  and will make you happy <strong>{life}</strong>
                </BreedText>
              )}
            </ModalDetailsWrapper>
          </ModalContentWrapper>
        </Modal>
      )}
    </>
  );
};
