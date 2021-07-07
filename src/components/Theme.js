import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";

const Theme = (props) => {
    const insets = useSafeAreaInsets();
    const {
        disableBottomNotchHandling,
        style,
        children = null
    } = props;
    return (<View style={[styles.main, style, { paddingBottom: disableBottomNotchHandling ? 0 : (insets.bottom) }]}>
        {children}
    </View>);
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.app_container_color
    }
});

export default Theme;

