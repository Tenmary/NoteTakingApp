import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import { ScreenNavigationProp } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  setShouldCreateNewNote: (toggle: boolean) => void;
};
export const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [noteText, setNoteText] = useState<string>("");

  const getNote = async () => {
    const result = await AsyncStorage.getItem("note");
    setNoteText(result ?? "");
  };
  return (
    <>
      <View>
        <Text>{noteText}</Text>
      </View>
      <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      />
    </>
  );
};
