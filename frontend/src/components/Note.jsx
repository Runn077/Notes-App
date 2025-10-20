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
    })

  return (
    <div className='noteContainer'>
        <div className='noteTitle'>{note.title}</div>
        <div className='noteText'>{note.postBody}</div>

    </div>
  )
}

export default Note
