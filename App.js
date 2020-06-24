import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]

export default function App() {
  const [category, setCategory] = useState()

  return (
    <Screen>
      <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} placeholder="Category" icon="apps" />

      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
