import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const HomeScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;