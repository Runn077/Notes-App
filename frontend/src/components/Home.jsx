import React, {useEffect, useState}  from 'react';
import axios from 'axios';

function Home() {
  const [listOfNotes, setListOfNotes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/notes`)
    .then((response) => {
        setListOfNotes(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log("Error fetching data: " + error)
    });
  }, []);

  return (
    <div className="homeContainer">
        {listOfNotes.map((note, index) => {
            return (
            <div className = "note">
                <div className='title'>{note.title}</div>
                <div className='postBody'>{note.postBody}</div>
            </div>
            );
        })}  
    </div>
  );
};

export default Home
