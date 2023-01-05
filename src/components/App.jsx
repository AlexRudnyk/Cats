import axios from 'axios';
import { useState, useEffect } from 'react';

export const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await axios.get(
          'https://api.thedogapi.com/v1/images/search?limit=20&api_key=live_RhKsggqeaM43aTur31eeAV85R9vyl4UIV7ogayx7INLdiXJ9El14ifJz42mzk9ka&size=med&mime_types=jpg'
        );
        setDogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDogs();
  }, []);

  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog.id}>
          <img src={dog.url} alt="dog" />
        </li>
      ))}
    </ul>
  );
};
