import {
  HeaderLogo,
  StyledNavLink,
  StyledLink,
  StyledHeader,
} from './AppBar.styled';
import logo from '../../../src/images/logo/dog-logo.png';

export const AppBar = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <HeaderLogo src={logo} alt="logo-image" />
        <h1>Dog Collection</h1>
      </StyledLink>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/breeds">Breeds</StyledNavLink>
      </nav>
    </StyledHeader>
  );
};
