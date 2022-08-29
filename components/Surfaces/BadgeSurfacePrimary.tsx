import * as React from 'react';
import {View, Text} from 'react-native';
import {Surface, useTheme} from "react-native-paper";

interface BadgeSurfacePrimaryProps {
    text: string
}

const BadgeSurfacePrimary = (props: BadgeSurfacePrimaryProps) => {
    const theme = useTheme();
    return (
        <Surface style={{
            backgroundColor: theme.colors.primary,
            width: '100%',
            height: 48,
            marginTop: 16,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20,
            }}> {props.text} </Text>
        </Surface>
    );
};

export default BadgeSurfacePrimary;
