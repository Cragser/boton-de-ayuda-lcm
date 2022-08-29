import * as React from 'react';
import {Text} from 'react-native-paper';

interface CentralTypographyProps {
    text: string
    onPress?: () => void
}

const CentralTypography = (props: CentralTypographyProps) => {
    return (
        <Text
            style={{
                fontSize: 16,
                fontWeight: "bold",
                flex: 1,
                textAlign: "center",
                textTransform: "uppercase",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
            }}

            onPress={props.onPress}
        >
            {props.text}
        </Text>
    );
};

export default CentralTypography;
