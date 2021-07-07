import { createStackNavigator, CardStyleInterpolators } from "react-navigation-stack";
import { navigationConstants } from "../navigationConstants";
import Dashboard from "../../containers/Dashboard";
import RegionList from "../../containers/RegionList";
import SpecificRegion from "../../containers/SpecificRegion";
import SpecificRegionDetail from "../../containers/SpecificRegionDetail";
import TotalDetail from "../../containers/TotalDetail";

const mainStack = createStackNavigator({
    [navigationConstants.dashboard]: { screen: Dashboard },
    [navigationConstants.region_list]: { screen: RegionList },
    [navigationConstants.specific_region]: { screen: SpecificRegion },
    [navigationConstants.specific_region_detail]: { screen: SpecificRegionDetail },
    [navigationConstants.total_detail]: { screen: TotalDetail }
}, {
    initialRouteName: navigationConstants.dashboard,
    headerMode: "none",
    defaultNavigationOptions: {
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    },
});

export default mainStack;