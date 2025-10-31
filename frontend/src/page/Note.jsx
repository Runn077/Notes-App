import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Note() {
  let {id} = useParams()  
  const [note, setNote] = useState({});
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const adjustHeight = (el) => {
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/notes/${id}`)
        .then((response) => {
            setNote(response.data)
        })
  }, [id]);

  useLayoutEffect(() => {
    adjustHeight(titleRef.current);
    adjustHeight(bodyRef.current);
  }, [note.title, note.postBody]);

  const handleChangeBody = async (e) => {
    const updatedText = e.target.value
    adjustHeight(e.target);
    setNote({...note, postBody: updatedText})
    await axios.put(`http://localhost:3001/notes/${id}`, {
        ...note,
        postBody: updatedText
    });
  }
  const handleChangeTitle = async (e) => {
    const updatedText = e.target.value
    adjustHeight(e.target);
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
            ref={titleRef}
            value={note.title}
            onChange={handleChangeTitle}
            placeholder='Write Something!!!'
        />
        <textarea 
            className='noteText'
            ref={bodyRef}
            value={note.postBody}
            onChange={handleChangeBody}
            placeholder='Write Something!!!'
        />
    </div>
  )
}

export default Note
