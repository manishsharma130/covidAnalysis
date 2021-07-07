import { colors } from "../../constants/colors";
import Toast, { ToastColor } from "./Toast";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const TOAST_WODTH = SCREEN_WIDTH - 40;
// const TOAST_ADJUSTED_TOP = isIOS() ? (hasNotch() ? 35 : 25) : 0;
const TOAST_ADJUSTED_TOP = 10;

const TOAST_THEME = {
	containerStyle: {
		top: TOAST_ADJUSTED_TOP,
		width: TOAST_WODTH,
		alignSelf: "center",
		borderRadius: 4,
		minHeight: 50,
		// backgroundColor: colors.app_red_color,
		paddingHorizontal: 15,
		// backgroundColor: colors.dark_blue,
		// ...elevationShadowStyle(3)
	},
	textStyle: {
		fontSize: 12,
		color: colors.white,
		lineHeight: 16,
		padding: 0,
		margin: 0,
	},
	duration: 4000,
};

const ShowToast = (type, message, onClose = () => { }) => {
	Toast.showToast({
		type,
		message,
		onClose: onClose,
		...TOAST_THEME,
	});
};

// export default ShowToast;

// Success Toast
export const showSuccessMessage = (message) => {
	ShowToast(ToastColor.SUCCESS, message);
};

// Error Toast
export const showErrorMessage = (message) => {
	ShowToast(ToastColor.DANGER, message);
};
