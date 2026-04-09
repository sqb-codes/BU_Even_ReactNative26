import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { OrderScreen } from "../screens/OrderScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { CartScreen } from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const MainTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Orders" component={OrderScreen}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

export default MainTabNav;