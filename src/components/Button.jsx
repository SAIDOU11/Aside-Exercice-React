import { ThemeContext } from '../App.jsx';
import { useContext } from 'react';

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`${theme}-theme`}>
      Switch Theme
    </button>
  );
};

export default Button;
