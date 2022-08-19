import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteTexts] = useState('');
  const charactersLimits = 200;
  const handleChange = (event) => {
    if (charactersLimits - event.target.value.length >= 0) {
      setNoteTexts(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteTexts('');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="Type to add a note.."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charactersLimits - noteText.length}</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
