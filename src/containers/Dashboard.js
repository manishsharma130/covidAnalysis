import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Theme from "../components/Theme";
import CommonHeader from "../components/CommonHeader";
import { STRING_CONSTANT } from "../constants/stringConstants";
import RegionCard from "../components/RegionCard";
import { showErrorMessage } from "../components/CustomToast/utils";
import { requestApi } from "../networks";
import { endPoints } from "../networks/endPoints";
import { REQUEST_TYPE } from "../networks/utils";
import Button from "../components/Button";
import { navigationConstants, NAVIGATION_PARAMS } from "../navigation/navigationConstants";
import { images } from "../constants/images";

const Dashboard = (props) => {

    const onBtn1Click = () => {
        props.navigation.navigate(navigationConstants.region_list);
    }
    const onBtn2Click = () => {
        props.navigation.navigate(navigationConstants.total_detail);
    }

    return (<Theme>
        <CommonHeader isLight={false} title={STRING_CONSTANT.covid_release} />
        <View style={styles.main}>
            <Image source={images.covid_icon} style={styles.imgStyle} />
            <Button style={styles.btnStyle} title={STRING_CONSTANT.search_by_region} onPress={onBtn1Click} />
            <Button style={styles.btnStyle} title={STRING_CONSTANT.total_data_by_date} onPress={onBtn2Click} />
        </View>
    </Theme>);
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    contentContainerStyle: {
        paddingHorizontal: 15,
        paddingTop: 20
    },
    btnStyle: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    imgStyle: {
        alignSelf: "center",
        margin: 10
    }
});

export default Dashboard;