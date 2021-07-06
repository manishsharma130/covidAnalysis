import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Example1 = (props) => {
    return (<View style={styles.body}>

    </View>);
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        borderWidth: 1,
        borderColor: "red"
    }
});

export default Example1;