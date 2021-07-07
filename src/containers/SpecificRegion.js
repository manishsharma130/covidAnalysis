import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Theme from "../components/Theme";
import CommonHeader from "../components/CommonHeader";
import { images } from "../constants/images";
import { STRING_CONSTANT } from "../constants/stringConstants";
import { navigationConstants, NAVIGATION_PARAMS } from "../navigation/navigationConstants";
import { requestApi } from "../networks";
import { NavigationEvents } from "react-navigation";
import { endPoints } from "../networks/endPoints";
import { REQUEST_TYPE } from "../networks/utils";
import RegionListCard from "../components/RegionListCard";

const SpecificRegion = (props) => {
    const selectedRegion = props.navigation.getParam(NAVIGATION_PARAMS.item, {});
    const [regionList, setRegionList] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const onLeft = () => { props.navigation.goBack() }
    const onApiCall = (disableLoader) => {
        requestApi({
            url: endPoints.provinces,
            path: selectedRegion?.iso,
            apiRequestType: REQUEST_TYPE.GET,
            disableLoader
        }).then((res) => {
            setRegionList(res?.data?.data || []);
            setRefreshing(false);
        }).catch((err) => { setRefreshing(false); });
    }
    const onWillFocus = () => {
        onApiCall(false);
    }
    const onRefresh = () => {
        setRefreshing(true);
        onApiCall(true);
    }
    const renderItem = ({ item, index }) => {
        return (<RegionListCard
            onMapClick={() => { alert("In Progress") }}
            item={item}
            onClick={() => {
                props.navigation.navigate(navigationConstants.specific_region_detail, {
                    [NAVIGATION_PARAMS.item]: {
                        selectedRegion: selectedRegion,
                        item: item
                    }
                });
            }}
        />)
    }

    return (<Theme>
        <CommonHeader
            isLight={false}
            leftImage={images.back_arrow}
            onLeft={onLeft}
            title={STRING_CONSTANT.region_list}
        />
        <NavigationEvents
            onWillFocus={onWillFocus}
        />
        <View style={styles.main}>
            <FlatList
                data={regionList}
                renderItem={renderItem}
                keyExtractor={(_, index) => String(index)}
                contentContainerStyle={styles.contentContainerStyle}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </View>
    </Theme>);
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    contentContainerStyle: {
        paddingLeft: 10,
        paddingTop: 10
    }
});

export default SpecificRegion;