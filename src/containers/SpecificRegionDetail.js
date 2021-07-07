import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Theme from "../components/Theme";
import CommonHeader from "../components/CommonHeader";
import { NAVIGATION_PARAMS } from "../navigation/navigationConstants";
import { images } from "../constants/images";
import { requestApi } from "../networks";
import { endPoints } from "../networks/endPoints";
import { REQUEST_TYPE } from "../networks/utils";

const SpecificRegionDetail = (props) => {
    const selectedItem = props.navigation.getParam(NAVIGATION_PARAMS.item, {});
    const [data, setData] = React.useState({});
    const onLeft = () => { props.navigation.goBack() }
    const onApiCall = () => {
        const params = {};
        requestApi({
            url: endPoints.reports,
            params: params,
            apiRequestType: REQUEST_TYPE.GET
        }).then((res) => {
            console.log("data:- ", data);
        }).catch((err) => {
            console.log(err);
        });
    }

    React.useEffect(() => {

    }, []);
    console.log("selectedItem:- ", selectedItem);
    return (<Theme>
        <CommonHeader
            isLight={false}
            leftImage={images.back_arrow}
            onLeft={onLeft}
        />
        <View style={styles.main}>

        </View>
    </Theme>);
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // borderColor: "red",
        // borderWidth: 1,
        // justifyContent: "center",
        // alignItems: "center"
    }
});

export default SpecificRegionDetail;