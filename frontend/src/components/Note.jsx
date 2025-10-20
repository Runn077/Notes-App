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

  const handleChange = async (e) => {
    const updatedText = e.target.value
    setNote({...note, postBody: updatedText})
    await axios.put(`http://localhost:3001/notes/${id}`, {
        ...note,
        postBody: updatedText
    });
  }

  return (
    <div className='noteContainer'>
        <div className='noteTitle'>{note.title}</div>
        <textarea 
            className='noteText'
            value={note.postBody}
            onChange={handleChange}
            placeholder='Write Something!!!'
        />
    </div>
  )
}

export default Note
