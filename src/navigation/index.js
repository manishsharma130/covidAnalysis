import React from "react";
import mainStack from "./stack/mainStack";
import { createAppContainer } from "react-navigation";

export default class Navigation extends React.Component {
    render() {
        const AppContainer = createAppContainer(mainStack);
        return (<AppContainer />);
    }
}

