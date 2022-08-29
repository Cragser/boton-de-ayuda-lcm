import * as React from 'react';
import {Text, TouchableOpacity} from "react-native";
import SocialButton from "./SocialButton";
import {useTheme} from "react-native-paper";

interface PrimaryButtonProps {
    label: string,

    onPress: () => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const theme = useTheme();
    return (
        <SocialButton
            onPress={props.onPress}
            label={props.label}
            bgColor={theme.colors.primary}
            textColor={'#fff'}
        />
    );
};

export default PrimaryButton;
