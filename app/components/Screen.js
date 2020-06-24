import React from 'react';
import Constant from 'expo-constants'
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View >
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { paddingTop: Constant.statusBarHeight, flex: 1 }
})

export default Screen;