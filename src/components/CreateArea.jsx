import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input name='title' placeholder='Title' onChange={handleChange} value={note.title} />
        )}
        <textarea
          name='content'
          placeholder='Take a note...'
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={note.content}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.addNote(note);
              setNote({ title: '', content: '' });
              event.preventDefault();
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
