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
      {note.title}
    </div>
  )
}

export default Note
