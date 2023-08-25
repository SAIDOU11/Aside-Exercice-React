import { useState } from 'react';

const App = () => {
  const [data, setData] = useState({});
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
