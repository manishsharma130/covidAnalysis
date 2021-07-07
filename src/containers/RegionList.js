import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
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

const RegionList = (props) => {
    const [data, setData] = React.useState([]);
    const [selectedItem, setSelectItem] = React.useState({});
    const [refreshing, setRefreshing] = React.useState(false);
    const onLeft = () => { props.navigation.goBack() }

    const onApiCall = (disableLoader) => {
        requestApi({
            url: endPoints.regions,
            apiRequestType: REQUEST_TYPE.GET,
            disableLoader: disableLoader
        }).then((res) => {
            setData(res?.data?.data || []);
            setRefreshing(false);
        }).catch((err) => {
            setRefreshing(false)
        });
    }

    React.useEffect(() => {
        onApiCall();
    }, []);

    const renderItem = ({ item, index }) => {
        return (<RegionCard
            item={item}
            isSelected={selectedItem?.iso === item?.iso}
            onPress={() => { setSelectItem(item); }}
        />);
    };
    const onRefresh = () => {
        setRefreshing(true);
        onApiCall(true);
    }
    const onBtnClick = () => {
        if (selectedItem.iso) {
            props.navigation.navigate(navigationConstants.specific_region, { [NAVIGATION_PARAMS.item]: selectedItem });
        } else {
            showErrorMessage(STRING_CONSTANT.pls_select_a_region);
        }
    }

    return (<Theme>
        <CommonHeader leftImage={images.back_arrow} onLeft={onLeft} isLight={false} title={STRING_CONSTANT.select_any_region} />
        <View style={styles.main}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => String(index)}
                refreshing={refreshing}
                onRefresh={onRefresh}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </View>
        <Button style={styles.btnStyle} title={STRING_CONSTANT.next} onPress={onBtnClick} />
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
    }
});

export default RegionList;