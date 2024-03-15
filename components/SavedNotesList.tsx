import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Note, getAllNotes } from "../services/NoteStoreService";

export const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View style={styles.container}>
      {notes.map((note) => (
        <View style={styles.row} key={note.id}>
          <Text style={styles.note}>
            {note.text.length === 0 ? "(Blank note)" : note.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  row: {
    width: "90%",
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
  note: {
    paddingVertical: 20,
    width: "100%",
    fontSize: 16,
  },
});
