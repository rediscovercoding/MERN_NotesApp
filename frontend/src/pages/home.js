import { useEffect, useState } from "react";

//components
import NotesDetails from "../components/notesDetails";

const Home = () => {
  const [note, setNote] = useState(null);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();
      if (response.ok) {
        setNote(json);
      }
    };

    fetchNotes();
  }, []);
  return (
    <div className="home">
      <div className="notes">
        {note &&
          note.map((note) => <NotesDetails key={note._id} note={note} />)}
      </div>
    </div>
  );
};

export default Home;
