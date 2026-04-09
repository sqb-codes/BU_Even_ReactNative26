import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import {CartScreen} from "../screens/CartScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {OrderScreen} from "../screens/OrderScreen";

const Tab = createBottomTabNavigator();
export const MainTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="Orders" component={OrderScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}