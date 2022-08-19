import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
     return (
        <div className="note">
            <span>hello! This is my first note. </span>
            <div className="note-footer">
                <small>19/08/2022</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />  
            </div>
        </div>
     )
}
export default Note;