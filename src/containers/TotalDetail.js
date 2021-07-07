import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from "../components/Theme";
import CommonHeader from "../components/CommonHeader";

const TotalDetail = (props) => {
    return (<Theme>
        <CommonHeader isLight={true} />
        <View style={styles.main}>
            <Text>{"TotalDetail"}</Text>
        </View>
    </Theme>);
}

const styles = StyleSheet.create({
    main: { flex: 1, borderColor: "red", borderWidth: 1, justifyContent: "center", alignItems: "center" }
});

export default TotalDetail;