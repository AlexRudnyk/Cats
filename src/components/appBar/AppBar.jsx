import { Link } from 'react-router-dom';
import { AppContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppContainer>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/breeds">Breeds</Link>
        </nav>
      </header>
    </AppContainer>
  );
};
