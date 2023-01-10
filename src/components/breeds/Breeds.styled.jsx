import styled from 'styled-components';
import Select from 'react-select';
import { device } from 'constants/breakpoints';

export const BreedsWrapper = styled.div`
  margin: 0 auto;
  padding: 15px;

  @media screen and (${device.mobile}) {
    width: 440px;
    padding: 20px;
  }
  @media screen and (${device.tablet}) {
    width: 728px;
    padding: 20px;
  }
  @media screen and (${device.desktop}) {
    width: 1160px;
    padding: 20px;
  }
`;

export const BreedSelect = styled(Select)`
  // width: 400px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (${device.mobile_only}) {
    width: 100%;
  }
  @media screen and (${device.tablet}) {
    width: 320px;
  }
  @media screen and (${device.desktop}) {
    width: 600px;
  }
`;

export const ImgWrapper = styled.div`
  @media screen and (${device.mobile_only}) {
    margin-bottom: 20px;
  }
  @media screen and (${device.tablet}) {
    margin-right: 30px;
  }
`;

export const BreedImg = styled.img`
  @media screen and (${device.mobile_only}) {
    width: 100%;
  }
  @media screen and (${device.tablet}) {
    width: 100%;
    max-width: 400px;
  }
  @media screen and (${device.desktop}) {
    width: 100%;
    max-width: 600px;
  }
`;

export const BreedsContainer = styled.div`
  // display: flex;
  // margin-top: 30px;
  @media screen and (${device.mobile_only}) {
    // width: 100%;
  }
  @media screen and (${device.tablet}) {
    display: flex;
  }
`;

export const BreedText = styled.p`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BreedTitle = styled.h2`
  margin-bottom: 30px;
  text-decoration: underline;
`;

export const BreedDescriptionWrapper = styled.div`
  // padding: 0 50px;

  @media screen and (${device.mobile_only}) {
  }
  @media screen and (${device.tablet}) {
    padding: 0 30px;
    border-left: 1px solid grey;
  }
`;

export const SearchImg = styled.img`
  width: 100%;
`;
