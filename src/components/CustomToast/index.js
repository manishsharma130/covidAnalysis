import React, { Component } from "react";
import { View } from "react-native";
import Toast from "./Toast";

export default class CustomToast extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View {...this.props} style={{ flex: 1 }}>
				{this.props.children}
				<Toast
					ref={(c) => {
						Toast.toastRef = c;
						return c;
					}}
				/>
			</View>
		);
	}
}
