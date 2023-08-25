import { useState } from 'react';

const App = () => {
  const [starWarData, setData] = useState({});

  // 1. GET the data (fetch)
  // 2. Save the data state

  fetch('https://swapi.dev/api/people/1')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <pre>{JSON.stringify(starWarData, null, 2)}</pre>
    </div>
  );
};

export default App;
