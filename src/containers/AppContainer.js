import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import Navigation from "../navigation";
import CustomToast from "../components/CustomToast";
import NetworkConnectivity from "../components/NetworkConnectivity";
import AppLoader from "../components/AppLoader";

const AppContainer = (props) => {
    return (
        <SafeAreaProvider>
            <View style={{ flex: 1 }}>
                <CustomToast>
                    <Navigation />
                    <AppLoader />
                    <NetworkConnectivity />
                </CustomToast>
            </View>
        </SafeAreaProvider>
    );
}

export default AppContainer;