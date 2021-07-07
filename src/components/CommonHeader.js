import React, { useState, useEffect } from "react";
import { Text, StatusBar, Animated, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import { fontSize } from "../constants/fonts";
// Usually we use this size for another side icons
export const SIDE_ITEM_WIDTH = 60;
// Standard Height for cross platform
export const HEADER_HEIGHT = 60;

const CommonHeader = (props) => {
    const {
        style,
        titleStyle,
        contentStyle,
        leftViewStyle,
        rightViewStyle,
        midViewStyle,
        onRight,
        onLeft,
        onTitle,
        title = "",
        leftImage,
        rightImage,
        leftImageStyle,
        rightImageStyle,
        children,
        translucent,
        isLight,
        androidStatusBarColor,
        rightView,
    } = props;
    const insets = useSafeAreaInsets();
    const [androidTranslucent, setAndroidTranslucent] = useState(translucent);
    const [androidStatusBarColorState, setAndroidStatusBarColor] = useState(androidStatusBarColor);
    const [isLightState, setIsLightState] = useState(isLight);
    useEffect(() => {
        setAndroidTranslucent(translucent);
    }, [translucent]);

    useEffect(() => {
        setIsLightState(isLight);
    }, [isLight]);

    useEffect(() => {
        setAndroidStatusBarColor(androidStatusBarColor);
    }, [androidStatusBarColor]);

    return (<Animated.View
        style={[
            styles.mainBody,
            style,
            {
                height: HEADER_HEIGHT + insets.top,
                paddingTop: insets.top,
            },
        ]}>
        <StatusBar
            animated={true}
            translucent={androidTranslucent}
            backgroundColor={androidStatusBarColorState}
            barStyle={isLightState ? "dark-content" : "light-content"}
        />
        {!children ? (
            <Animated.View style={[styles.mainContentStyle, contentStyle]}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onTitle}
                    style={[styles.midViewStyle, midViewStyle]}>
                    <Text style={[styles.txtStyle, titleStyle]}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onLeft}
                    style={[styles.leftSideStyle, leftViewStyle]}>
                    {leftImage ? <Image source={leftImage} style={leftImageStyle} /> : null}
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onRight}
                    style={[styles.rightSideStyle, rightViewStyle]}>
                    {rightImage ? <Image source={rightImage} style={rightImageStyle} /> : rightView}
                </TouchableOpacity>
            </Animated.View>
        ) : (
            children
        )}
    </Animated.View>);
}

const styles = StyleSheet.create({
    leftSideStyle: {
        position: "absolute",
        width: SIDE_ITEM_WIDTH,
        height: "100%",
        left: 0,
        justifyContent: "center",
        paddingLeft: 25,
    },
    rightSideStyle: {
        position: "absolute",
        width: SIDE_ITEM_WIDTH,
        height: "100%",
        right: 0,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 25,
    },
    mainBody: {
        width: "100%",
        backgroundColor: colors.app_header_color
    },
    mainContentStyle: {
        flex: 1,
        flexDirection: "row",
    },
    txtStyle: {
        fontSize: fontSize.headerTextSize,
        color: colors.white,
        lineHeight: 22,
        textAlign: "center",
        lineHeight: 22,
        fontWeight: "600"
        // fontFamily: fonts.secondary_bold_font,
    },
    midViewStyle: {
        marginHorizontal: SIDE_ITEM_WIDTH,
        flex: 1,
        justifyContent: "center",
    },
});



export default CommonHeader;