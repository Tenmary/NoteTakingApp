import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export type Note = {
  text: string;
  id: string;
};

export type NoteStore = {
  notes: Array<Note>;
};

const STORE_KEY = "TAKE_NOTES_STORE";

export const getAllNotes = async () => {
  const storeItem = await AsyncStorage.getItem(STORE_KEY);
  if (storeItem) {
    return JSON.parse(storeItem) as NoteStore;
  }
  return { notes: [] };
};

export const getNote = async (id: string) => {
  const NoteStore = await getAllNotes();
  const note = NoteStore.notes.find((note) => note.id === id);
  return note;
};

export const saveNote = async (text: string) => {
  const NoteStore = await getAllNotes();
  const notes = [...NoteStore.notes, { id: uuidv4(), text: text }];

  await AsyncStorage.setItem(STORE_KEY, JSON.stringify({ notes: notes }));
};
