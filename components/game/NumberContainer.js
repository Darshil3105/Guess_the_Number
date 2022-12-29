import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from "../../contants/colors";

const NumberContainer = ({ children }) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.numberText}>{ children }</Text>
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    numberText: {
        color: colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'OpenSans-Bold',
    },
});

export default NumberContainer;