import React, {useEffect, useState}  from 'react';
import axios from 'axios';

function Home() {
  const [listOfNotes, setListOfNotes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/notes`).then((response) => {
        settListOfNotes(response.data)
    });
  });
  return (
    <div>
      Home Page
    </div>
  )
}

export default Home
