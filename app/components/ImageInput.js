import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted)
            alert("You need to Enable Permission.")
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', "Are you sure you want to delte the image?", [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No', }
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (ex) {
            console.log('Error reading an image', ex)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress} >
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
                )}
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: { width: '100%', height: '100%' }
})

export default ImageInput;