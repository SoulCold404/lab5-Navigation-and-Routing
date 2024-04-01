import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© 2024 ToDoLabAssignment</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#666',
    },
});

export default Footer;
