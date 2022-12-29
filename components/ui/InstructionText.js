import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../contants/colors";

const InstructionText = ({ children, style }) => {
    return <Text style = {[styles.instructionText, style]}>{ children }</Text>;
};

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'OpenSans-Regular',
        color: colors.accent500,
        fontSize: 24,
    },
});

export default InstructionText;