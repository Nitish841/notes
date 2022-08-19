import { MdDeleteForever } from 'react-icons/md';

const Note = ({ notes, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{notes.text} </span>
      <div className="note-footer">
        <small>{notes.date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(notes.id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
export default Note;
