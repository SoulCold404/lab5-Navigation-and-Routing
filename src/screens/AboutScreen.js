import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
    return (
        <MainLayout>
        <View style={styles.container}>
        <Text>ToDo App</Text>
        <Text>Created by Tao.Z</Text>
        <Text>{new Date().toLocaleDateString()}</Text>
        <Button
            title="Go back to Home"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AboutScreen;
