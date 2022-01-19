import React, { useState } from 'react';

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <div>
      <form>
        <input name='title' placeholder='Title' onChange={handleChange} value={note.title} />
        <textarea
          name='content'
          placeholder='Take a note...'
          rows='3'
          onChange={handleChange}
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.addNote(note);
            setNote({ title: '', content: '' });
            event.preventDefault();
          }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
