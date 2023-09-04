import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
};

export { App, ThemeContext };
