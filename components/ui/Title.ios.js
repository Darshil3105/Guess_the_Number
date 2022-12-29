import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
    return(
        <Text style = {styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        padding: 12,
    }
});

export default Title;