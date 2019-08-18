import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const ProfileScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>ProfileScreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default ProfileScreen;