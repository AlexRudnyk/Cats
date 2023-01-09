import {
  HeaderLogo,
  StyledNavLink,
  StyledLink,
  StyledHeader,
  AppBarContainer,
} from './AppBar.styled';
import logo from '../../../src/images/logo/dog-logo.png';

export const AppBar = () => {
  return (
    <StyledHeader>
      <AppBarContainer>
        <StyledLink to="/">
          <HeaderLogo src={logo} alt="logo-image" />
          <h1>Dog Collection</h1>
        </StyledLink>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/breeds">Breeds</StyledNavLink>
        </nav>
      </AppBarContainer>
    </StyledHeader>
  );
};
