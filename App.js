import React, { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() {

  return (
    <ListingEditScreen />
  )
}
