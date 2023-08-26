import { useState } from 'react';
import WindowTracker from './WindowTracker.jsx';

const App = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className="container">
      <button onClick={toggleShow}>Toggle WindowTracker </button>
      {show && <WindowTracker />}
    </div>
  );
};

export default App;
