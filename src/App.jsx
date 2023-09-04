import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import { createContext } from 'react';

const ThemeContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value="light">
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
};

export { App, ThemeContext };
