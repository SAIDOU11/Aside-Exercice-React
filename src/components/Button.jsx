import { ThemeContext } from '../App.jsx';
import { useContext } from 'react';

const Button = () => {
  const value = useContext(ThemeContext);
  return <button className={`${value}-theme`}>Switch Theme</button>;
};

export default Button;
