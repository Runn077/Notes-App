import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Note() {
  let {id} = useParams()  
  const [note, setNote] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/notes/${id}`)
        .then((response) => {
            setNote(response.data)
        })
  }, [id]);

  const handleChangeBody = async (e) => {
    const updatedText = e.target.value
    setNote({...note, postBody: updatedText})
    await axios.put(`http://localhost:3001/notes/${id}`, {
        ...note,
        postBody: updatedText
    });
  }
  const handleChangeTitle = async (e) => {
    const updatedText = e.target.value
    setNote({...note, title: updatedText})
    await axios.put(`http://localhost:3001/notes/${id}`, {
        ...note,
        title: updatedText,
    });
  }

  return (
    <div className='noteContainer'>
        <textarea 
            className='noteTitle'
            value={note.title}
            onChange={handleChangeTitle}
            placeholder='Write Something!!!'
        />
        <textarea 
            className='noteText'
            value={note.postBody}
            onChange={handleChangeBody}
            placeholder='Write Something!!!'
        />
    </div>
  )
}

export default Note
