import {ColorSchemeName} from "react-native";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import * as React from "react";
import RootStack from "./stack/RootStack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import SignUp from "../view/Auth/SignUp";
import LogIn from "../view/Auth/LogIn";


const Drawer = createDrawerNavigator()

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootStack/>
        </NavigationContainer>
    );
}
