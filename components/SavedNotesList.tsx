import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Note, getAllNotes } from "../services/NoteStoreService";
import { ScreenNavigationProp } from "../types";

export const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigationProp>();

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map((note) => (
          <Pressable
            key={note.id}
            onPress={() => navigation.navigate("EditNote", { noteId: note.id })}
          >
            <View style={styles.row} key={note.id}>
              <Text style={styles.note}>
                {note.text.length === 0 ? "(Blank note)" : note.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
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
