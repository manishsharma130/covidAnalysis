import React from "react";
import { StyleSheet } from "react-native";
import AppThemeLoader from "./AppThemeLoader";

export const LoaderConfig = {
    counter: 0,
    loaderRef: null,
    updateCounter: function (val) {
        this.counter = val;
        return this;
    },
    getValue: function () {
        return this.counter;
    }
};

const AppLoader = (props) => {
    return (<AppThemeLoader ref={(r) => {
        LoaderConfig.loaderRef = r;
        return r;
    }} />);
}

export default AppLoader;
