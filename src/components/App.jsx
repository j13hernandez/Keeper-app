import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

const noteMaker = (note) => <Note key={note.key} title={note.title} content={note.content} />;

const App = () => {
  return (
    <div>
      <Header />
      {notes.map(noteMaker)}
      <Footer />
    </div>
  );
};

export default App;
