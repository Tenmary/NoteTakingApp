import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { SavedNotesList } from "../components/SavedNotesList";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <>
      <SavedNotesList />
      <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      />
    </>
  );
};
