import React from "react";
import { NoteTakingInput } from "../components/NoteTakingInput";
import { saveNote } from "../services/NoteStoreService";

export const EditNoteScreen: React.FC = () => {
  return <NoteTakingInput saveNote={saveNote} />;
};
