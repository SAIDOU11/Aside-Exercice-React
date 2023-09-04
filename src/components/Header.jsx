import { ThemeContext } from '../App.jsx';
import { useContext } from 'react';

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <header className={`${theme}-theme`}>
      <h1>{theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
    </header>
  );
};

export default Header;
