import React, { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

function Content() {
  // State to track the mode (viewing, editing, etc.)
  const [mode, setMode] = useState("view"); // Initial mode is set to "view"

  const getContent = () => {
    // Conditionally render content based on the mode state
    if (mode === "edit") {
      return <NoteEditor />;
    } else if (mode === "view") {
      return <NoteViewer />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;