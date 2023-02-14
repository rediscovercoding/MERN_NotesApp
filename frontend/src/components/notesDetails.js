import { useNotesContext } from "../hooks/useNotesContext";

const NotesDetails = ({ note }) => {
  const { dispatch } = useNotesContext();

  const handleClick = async () => {
    const response = await fetch("/api/notes/" + note._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_NOTE", payload: json });
    }
  };
  return (
    <div className="notes-details">
      <h4>{note.title}</h4>
      <p className="noteBody">{note.text}</p>
      <p className="noteDate">Created At: {note.createdAt}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default NotesDetails;
