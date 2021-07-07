import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { fontSize } from "../constants/fonts";
import { STRING_CONSTANT } from "../constants/stringConstants";

const RegionCard = (props) => {
    const { isSelected = false, style, item = {}, onPress } = props;
    return (<TouchableOpacity onPress={onPress} activeOpacity={.8}
        style={[styles.mainBody, style]}>
        <View style={styles.radioBtnBody}>
            <View style={[styles.radioBtn, isSelected ? styles.activeBtn : null]} />
        </View>
        <>
            <View style={styles.rowItem}>
                <Text numberOfLines={1} style={styles.title}>{STRING_CONSTANT.covid_region}</Text>
                <Text numberOfLines={1} style={styles.regionTxt}>{item?.name || ""}</Text>
            </View>
            <View style={styles.rowItem}>
                <Text numberOfLines={1} style={styles.title}>{STRING_CONSTANT.iso_code}</Text>
                <Text numberOfLines={1} style={styles.regionTxt}>{item?.iso || ""}</Text>
            </View>
        </>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    mainBody: {
        height: 80,
        width: "100%",
        backgroundColor: colors.region_card_color,
        borderRadius: 10,
        borderColor: colors.region_card_opacity(1),
        borderWidth: 1,
        paddingLeft: 50,
        marginBottom: 15
    },
    title: {
        fontSize: fontSize.regionCardSize,
        lineHeight: 19,
        color: colors.white,
        fontWeight: "800",
        textDecorationLine: "underline",
    },
    regionTxt: {
        fontSize: fontSize.regionCardSize,
        lineHeight: 19,
        color: colors.white,
        fontWeight: "500",
        marginLeft: 10,
        flex: 1,

    },
    rowItem: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        paddingRight: 5
    },
    radioBtnBody: {
        width: 50,
        height: "100%",
        // borderColor: "red",
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        left: 0,
    },
    radioBtn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: colors.goldern_color,
        borderWidth: 2
    },
    activeBtn: {
        backgroundColor: colors.goldern_color,
    }
});

export default RegionCard;