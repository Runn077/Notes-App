import React, {use, useEffect, useState}  from 'react';
import axios from 'axios';

function Home() {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [modal, setModal] = useState(false);

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

  const handleClick = () =>{
    setModal(!modal)
  }

  return (
    <div className="homeContainer">
        {listOfNotes.map((note, index) => {
            return (
            <div className = "note" key={index}>
                <div className='title'>{note.title}</div>
                <div className='postBody'>{note.postBody}</div>
            </div>
            );
        })}
        <button onClick={handleClick} className='createBtn'>Create</button> 
          { modal &&
            <div className='modal'>
              <div className='overlay'></div>
              <div className='modalContent'>
                <div className='modalTitle'>Create New Note</div>
                <button onClick={handleClick} className='closeModalButton'>Close</button>
              </div>
            </div>
          }  
    </div>
  );
};

export default Home
