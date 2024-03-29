import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
//components
import NotesDetails from "../components/NotesDetails";
import NoteForm from "../components/NoteForm";

const Home = () => {
  const { notes, dispatch } = useNotesContext();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json });
      }
    };

    fetchNotes();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="notes">
        {notes &&
          notes.map((note) => <NotesDetails key={note._id} note={note} />)}
      </div>
      <NoteForm />
    </div>
  );
};

export default Home;
