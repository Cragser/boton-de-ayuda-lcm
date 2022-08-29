import * as React from 'react';
import {Text} from 'react-native-paper';

interface LinkTypographyProps {
    text: string
    onPress?: () => void
}

const LinkTypography = (props: LinkTypographyProps) => {
    return (
        <Text
            style={{
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 12,
                paddingBottom: 12,
                marginTop: 4,
                marginBottom: 4,
            }}
            onPress={props.onPress}
        > {props.text} </Text>
    );
};

export default LinkTypography;
