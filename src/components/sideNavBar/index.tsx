import { createDrawerNavigator } from "@react-navigation/drawer";
import User from "../../app/user/[user]";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator()

export default function SideNavBar(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="user/[user]" component={User} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}