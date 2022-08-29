import * as React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {DrawerScreenProps} from "@react-navigation/drawer";
import {DrawerNavigationProp} from "@react-navigation/drawer/src/types";

interface HeaderProps {
    navigate: any;
}

const MainHeader = ({navigate}: HeaderProps) => {
    const theme = useTheme();
    return (
        <Appbar.Header style={{
            backgroundColor: theme.colors.primary,
        }}>
            <Appbar.Action color='white' icon="menu" onPress={() => {
                navigate.navigation.openDrawer();
            }}/>
            <Appbar.Content
                titleStyle={{height: 32}}
                title={"TT"}
                style={{alignItems: 'center', justifyContent: 'center', paddingTop: 4}}
            />
        </Appbar.Header>
    );
};

export default MainHeader;
