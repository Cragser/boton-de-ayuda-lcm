import * as React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {StackScreenProps} from "@react-navigation/stack";

interface HeaderProps {
    navigate: StackScreenProps<any>;
}

const StackHeader = ({navigate}: HeaderProps) => {
    const theme = useTheme();
    return (
        <Appbar.Header style={{
            backgroundColor: theme.colors.background,
            zIndex: 1,
        }}>
            <Appbar.Content
                titleStyle={{height: 32}}
                title={"TT"}
                style={{alignItems: 'center', justifyContent: 'center', paddingTop: 4}}
            />
        </Appbar.Header>
    );
};

export default StackHeader;
