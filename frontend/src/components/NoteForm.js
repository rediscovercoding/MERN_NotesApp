import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = { title, text };
    const response = await fetch("/api/notes", {
      method: "Post",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      console.log("Note added successfully", json);
      setTitle("");
      setText("");
      setError(null);
      dispatch({ type: "CREATE_NOTE", payload: json });
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add New Note</h3>
      <label>Note Title</label>
      <input
        className="inputTitle"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <label htmlFor="textArea">Text</label>
      <textarea
        id="textArea"
        rows="4"
        cols="25"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <br />
      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NoteForm;
