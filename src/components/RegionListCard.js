import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { fontSize } from "../constants/fonts";
import { images } from "../constants/images";
import { STRING_CONSTANT } from "../constants/stringConstants";

const RegionListCard = (props) => {
    const { style, item, onMapClick, onClick } = props;
    return (<View style={[styles.main, style]}>
        <TouchableOpacity onPress={onMapClick} activeOpacity={1} style={styles.coin}>
            <Image source={images.map_pin} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={onClick} style={styles.sideItem}>
            <View style={styles.line} />
            <Text style={styles.txtStyle}>{`${STRING_CONSTANT.region}: ${item?.name}`} </Text>
            <Text style={styles.txtStyle}>{`${STRING_CONSTANT.province}: ${item?.province || item?.name}`} </Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    main: {
        height: 80,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    coin: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.app_header_color
    },
    sideItem: {
        height: 70,
        flex: 1,
        backgroundColor: colors.app_header_color,
        // backgroundColor: "blue",
        marginLeft: 25,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 13,
        justifyContent: "space-between"
    },
    line: {
        position: "absolute",
        left: -25,
        height: 1,
        width: 25,
        bottom: 35,
        backgroundColor: colors.white
    },
    txtStyle: {
        fontSize: fontSize.regionCardSize,
        fontWeight: "600",
        color: colors.goldern_color
    }
});

export default RegionListCard;