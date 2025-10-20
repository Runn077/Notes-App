import React, {use, useEffect, useState}  from 'react';
import axios from 'axios';

function Home() {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');

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

  const handleSave = () => [
    axios.post(`http://localhost:3001/notes`, {title: newTitle, postBody: ''})
      .then((response) => {
        setNewTitle('');
        setModal(false);
        setListOfNotes([...listOfNotes, response.data]);
      })
  ]

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
                <input 
                  placeholder='Title Name' 
                  value={newTitle} 
                  className='titleInput'
                  onChange = {(e)=> setNewTitle(e.target.value)}>
                </input>
                <button onClick={handleSave} className='save'>Save</button>
                <button onClick={handleClick} className='closeModalButton'>Close</button>
              </div>
            </div>
          }  
    </div>
  );
};

export default Home
