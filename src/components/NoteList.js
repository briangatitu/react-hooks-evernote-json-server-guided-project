import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from the server when the component mounts
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3000/notes");
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NoteList;