import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px;

  :not(:last-child) {
    margin-right: 30px;
  }
  color: #4d016e;

  &.active {
    color: blue;
    border: 1px solid grey;
    border-radius: 5px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #4d016e;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  padding-right: 30px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;
