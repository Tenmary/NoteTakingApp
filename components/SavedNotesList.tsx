import React, { useState } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Note, getAllNotes } from "../services/NoteStoreService";

export const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View>
      {notes.map((note) => (
        <Text key={note.id}>{note.text}</Text>
      ))}
    </View>
  );
};
