import * as React from 'react';
import {View, Text} from "react-native";
import {DrawerContentScrollView} from "@react-navigation/drawer";

interface CustomDrawerProps {

}

const CustomDrawer = (props: CustomDrawerProps) => {
    return (
        <View>
            <DrawerContentScrollView {...props}>
                <Text>HI HI</Text>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
