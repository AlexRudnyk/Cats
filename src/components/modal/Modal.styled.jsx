import { device } from 'constants/breakpoints';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;

  @media screen and (${device.mobile_only}) {
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
  @media screen and (${device.tablet}) {
    width: calc(100vw - 160px);
    height: calc(100vh - 160px);
    max-height: 500px;
    overflow-y: scroll;
  }
  @media screen and (${device.desktop}) {
    width: 700px;
    height: 500px;
  }
`;
