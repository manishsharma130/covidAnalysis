import React, { Component } from "react";
import {
	Text,
	StyleSheet,
	Animated,
	TouchableOpacity,
	Easing,
	TextStyle,
	ViewStyle,
	Keyboard,
	Platform,
} from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

export const ToastColor = {
	DANGER: "#EB5757",
	WARNING: "#f0ad4e", //default
	SUCCESS: "#5cb85c",
}

const ToastConstantutility = {
	DEFAULT_TOAST_MILLISECOND: 1500, //default (in ms)
	IOS: "ios",
	DEFAULT_BOTTOM_SPACE: 30,
	ABSOULTE: "absolute",
	KEYBOARD_DID_SHOW: "keyboardDidShow",
	KEYBOARD_DID_HIDE: "keyboardDidHide",
};



class Toast extends Component {
	static toastRef;
	closeTimeout = null;
	animationValue = new Animated.Value(0);
	constructor(props) {
		super(props);
		this.state = {
			isToast: false,
			message: "",
			containerStyle: undefined,
			textStyle: undefined,
			type: ToastColor.WARNING,
			keyboardHeight: 0,
			isKeyboardVisible: false,
		};
	}
	componentDidMount() {
		Keyboard.addListener(ToastConstantutility.KEYBOARD_DID_SHOW, this.keyboardDidShow);
		Keyboard.addListener(ToastConstantutility.KEYBOARD_DID_HIDE, this.keyboardDidHide);
	}

	keyboardDidHide = () => {
		this.setState({
			keyboardHeight: 0,
			isKeyboardVisible: false,
		});
	};
	keyboardDidShow = (e) => {
		this.setState({
			keyboardHeight: e.endCoordinates.height,
			isKeyboardVisible: true,
		});
	};

	static showToast = (config: ToastConfig) => {
		console.log(Toast.toastRef);
		Toast.toastRef && Toast.toastRef.show && Toast.toastRef.show(config);
	};
	static hideToast = () => {
		Toast.toastRef && Toast.toastRef.hide && Toast.toastRef.hide();
	};
	show = (config) => {
		if (this.closeTimeout) {
			clearTimeout(this.closeTimeout);
		}
		// this.animationValue.setValue(0);
		this.setState(
			{
				isToast: true,
				message: config.message ? config.message : "",
				type: config.type ? config.type : ToastColor.WARNING,
				containerStyle: config.containerStyle,
				textStyle: config.textStyle ? config.textStyle : undefined,
			},
			() => {
				Animated.timing(this.animationValue, {
					toValue: 1,
					duration: 100,
					easing: Easing.linear,
					useNativeDriver: true,
				}).start();
				const duration =
					config.duration > 0
						? config.duration
						: ToastConstantutility.DEFAULT_TOAST_MILLISECOND;
				let self = this;
				this.closeTimeout = setTimeout(() => {
					self.hide();
					config.onClose && config.onClose();
				}, duration);
			},
		);
	};
	hide = () => {
		this.animationValue.setValue(0);
		if (this.closeTimeout) {
			clearTimeout(this.closeTimeout);
		}
		this.animationValue.stopAnimation();
		this.setState({
			isToast: false,
		});
	};
	getCertainBottomHeight = (): number => {
		if (Platform.OS === ToastConstantutility.IOS) {
			if (this.state.isKeyboardVisible) {
				return this.state.keyboardHeight;
			}
			return ToastConstantutility.DEFAULT_BOTTOM_SPACE;
		}
		return 0;
	};
	getAppropriateStyleForToast = () => {
		let style;
		if (this.state.containerStyle) {
			// when developer provide the style then we make adjust it
			style = {
				...this.state.containerStyle,
				position: ToastConstantutility.ABSOULTE,
				top: this.state.containerStyle.hasOwnProperty("top")
					? this.state.containerStyle.top
					: undefined,
				bottom: this.state.containerStyle.hasOwnProperty("bottom")
					? this.getCertainBottomHeight() + this.state.containerStyle.bottom
					: undefined,
			};
		} else {
			// this is default style  when developer didn't provide any style for toast strip
			style = {
				position: ToastConstantutility.ABSOULTE,
				top: 0,
			};
		}
		return style;
	};
	render() {
		let opacity = this.animationValue.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
		});
		return this.state.isToast ? (
			<SafeAreaInsetsContext.Consumer>
				{(insets) => (
					<Animated.View
						style={[
							styles.stripStyle,
							{ backgroundColor: this.state.type },
							this.getAppropriateStyleForToast(),
							{ opacity },
							{ top: insets.top },
						]}>
						<TouchableOpacity activeOpacity={1} onPress={this.hide}>
							<Text style={[styles.txtStyle, this.state.textStyle]}>
								{" "}
								{this.state.message}{" "}
							</Text>
						</TouchableOpacity>
					</Animated.View>
				)}
			</SafeAreaInsetsContext.Consumer>
		) : null;
	}
}

export default Toast;

const styles = StyleSheet.create({
	stripStyle: {
		// position: 'absolute',
		minHeight: 50,
		padding: 5,
		justifyContent: "center",
		// backgroundColor: ToastColor.WARNING,
		width: "100%",
		// zIndex: 2000
	},
	txtStyle: {
		color: "white",
		fontSize: 18,
	},
});
