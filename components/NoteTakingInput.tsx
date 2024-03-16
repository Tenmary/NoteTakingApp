import React, { useEffect, useLayoutEffect, useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { getNote } from "../services/NoteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId: string | undefined;
};
export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");
  const navigation = useNavigation<ScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote id={noteId ?? ""} text={text} />,
    });
  }, [navigation, text, noteId]);

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, [noteId]);

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        autoFocus={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#e0ffff",
    width: "100%",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
