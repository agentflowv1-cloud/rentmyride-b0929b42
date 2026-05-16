import React from 'react';
import axios from 'axios';
import { useStore } from '../store';

function Home() {
  const { data, error } = useStore((state) => state);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://example.com/api/data');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <p>Data: {JSON.stringify(data)}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default Home;