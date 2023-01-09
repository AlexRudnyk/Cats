import styled from 'styled-components';
import { device } from 'constants/breakpoints';

export const GalleryContainer = styled.div`
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

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const MoreBtn = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    background-color: #303f9f;
  }
  :not(:last-child) {
    margin-right: 30px;
  }
`;
