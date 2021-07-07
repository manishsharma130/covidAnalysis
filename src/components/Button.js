import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { fontSize } from "../constants/fonts";

const Button = (props) => {
    const { title, style, onPress } = props;
    return (<TouchableOpacity
        onPress={onPress}
        style={[styles.main, style]}>
        <Text style={styles.title}>{title || ""}</Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    main: {
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.app_header_color,
        borderColor: colors.app_container_color,
        borderWidth: 1,
        borderRadius: 10
    },
    title: {
        fontSize: fontSize.btn_size,
        lineHeight: 19,
        color: colors.white,
        fontWeight: "600"
    }
});

export default Button;