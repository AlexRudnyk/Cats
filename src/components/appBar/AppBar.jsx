import {
  HeaderLogo,
  StyledNavLink,
  StyledLink,
  StyledHeader,
  AppBarContainer,
  HeaderTitle,
  HeaderNav,
} from './AppBar.styled';
import logo from '../../../src/images/logo/dog-logo.png';

export const AppBar = () => {
  return (
    <StyledHeader>
      <AppBarContainer>
        <StyledLink to="/">
          <HeaderLogo src={logo} alt="logo-image" />
          <HeaderTitle>Dog Collection</HeaderTitle>
        </StyledLink>
        <HeaderNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/breeds">Breeds</StyledNavLink>
        </HeaderNav>
      </AppBarContainer>
    </StyledHeader>
  );
};
