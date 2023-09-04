import { ThemeContext } from '../App.jsx';
import { useContext } from 'react';

const Header = () => {
  const value = useContext(ThemeContext);
  return (
    <header className={`${value}-theme`}>
      <h1>Dark Theme</h1>
    </header>
  );
};

export default Header;
