import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Example1 = (props) => {
    return (<View style={styles.body}>
        <TouchableOpacity style={styles.btnStyle}>
            <Text>{"Click Here"}</Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        borderWidth: 1,
        borderColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    btnStyle: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray"
    }
});

export default Example1;