import { useEffect, useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
  );

  useEffect(() => {
    setNotes(localStorage.setItem('notes', JSON.stringify(notes)));
  }, [notes]);
  return <h1>App</h1>;
};

export default App;
