import * as React from 'react';
import {Text, TouchableOpacity} from "react-native";

interface SocialButtonProps {
    label: string,
    bgColor: string,
    textColor: string,
    onPress: () => void
}

const SocialButton = (props: SocialButtonProps) => {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: props.bgColor,
                borderRadius: 4,
                marginTop: 16,
                marginBottom: 16
            }}
            onPress={props.onPress}
        >
            <Text
                style={{
                    color: props.textColor,
                    fontSize: 16,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}
            >
                {props.label}
            </Text>
        </TouchableOpacity>
    );
};

export default SocialButton;
