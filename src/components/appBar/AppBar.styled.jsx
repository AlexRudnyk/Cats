import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { device } from 'constants/breakpoints';

export const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  // justify-content: space-between;
  margin: 0 auto;

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

export const HeaderLogo = styled.img`
  @media screen and (${device.mobile_only}) {
    width: 70px;
    margin-right: 10px;
  }
  @media screen and (${device.tablet}) {
    width: 100px;
    margin-right: 20px;
  }
  @media screen and (${device.desktop}) {
    width: 100px;
    margin-right: 20px;
  }
`;

export const HeaderNav = styled.nav`
  margin-left: auto;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px;
  color: #4d016e;

  &.active {
    color: blue;
    border: 1px solid grey;
    border-radius: 5px;
  }

  @media screen and (${device.mini}) {
    padding: 6px;
    font-size: 16px;

    :not(:last-child) {
      margin-right: 10px;
    }
  }
  @media screen and (${device.mobile}) {
    :not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (${device.tablet}) {
    :not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #4d016e;
`;

export const StyledHeader = styled.header`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const HeaderTitle = styled.h2`
  @media screen and (${device.mobile_only}) {
  font-size: 20px;
    }
  }
  @media screen and (${device.tablet}) {
  font-size: 32px;
    }
  }
`;
