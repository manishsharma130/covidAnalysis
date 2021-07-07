import { PureComponent } from "react";
import NetInfo from "@react-native-community/netinfo";
import { showErrorMessage, showSuccessMessage } from "../components/CustomToast/utils";
import { STRING_CONSTANT } from "../constants/stringConstants";


export const INTERNET_STATE_TYPE = {
	INTERNET_PROBLEM: "INTERNET_PROBLEM",
};
class NetworkConnectivity extends PureComponent {
	static internetState = false;
	static initializer = false;
	static disableTheGlobalToast = false;
	static networkUpdate = NetInfo.addEventListener((netState) => {
		// console.log("internet State in comp:-->", netState);

		if (netState.isConnected) {
			// internet access is here
			if (NetworkConnectivity.initializer) {
				if (!NetworkConnectivity.internetState) {
					NetworkConnectivity.internetState = true;
					// alert("Internet is here");
					if (!NetworkConnectivity.disableTheGlobalToast) {
						showSuccessMessage(STRING_CONSTANT.internet_is_connected);
					}
				}
			}
		} else {
			// internet is not here
			// if (NetworkConnectivity.internetState) {
			NetworkConnectivity.internetState = false;
			if (!NetworkConnectivity.disableTheGlobalToast) {
				showErrorMessage(STRING_CONSTANT.internet_is_not_connected);
			}
			// }
		}
		// initializing the state about internet get updated for the first time
		if (!NetworkConnectivity.initializer) {
			NetworkConnectivity.internetState = netState.isConnected;
			NetworkConnectivity.initializer = true;
		}
	});

	componentWillUnmount() {
		// unsubscribe netInfo
		if (NetworkConnectivity.networkUpdate) {
			NetworkConnectivity.networkUpdate();
			NetworkConnectivity.networkUpdate = null;
		}
	}

	render() {
		return null;
	}
}

export default NetworkConnectivity;
