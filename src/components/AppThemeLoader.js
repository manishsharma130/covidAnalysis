import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../constants/colors";

const AppThemeLoader = (props, ref) => {
    const [isLoader, setLoader] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
        setVisibilityLoader: (visible) => setLoader(visible),
    }));
    return isLoader ? (<View style={styles.main}>
        <View style={styles.loaderStyle}>
            <View style={styles.innerLoader}>
                <ActivityIndicator size={"large"} color={colors.white} />
            </View>
        </View>
    </View>) : null;
}

const styles = StyleSheet.create({
    main: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    loaderStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.goldern_color
    },
    innerLoader: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.app_header_color
    }

});

export default React.forwardRef(AppThemeLoader);