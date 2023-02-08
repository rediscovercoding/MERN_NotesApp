const NotesDetails = ({ note }) => {
  return (
    <div className="notes-details">
      <h4>{note.title}</h4>
      <p>{note.text}</p>
      <p>Created At: {note.createdAt}</p>
    </div>
  );
};

export default NotesDetails;
