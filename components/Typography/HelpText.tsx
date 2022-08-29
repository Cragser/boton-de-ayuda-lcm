import * as React from 'react';
import {Text} from 'react-native-paper';

interface HelpTextProps {
    text: string
}

const HelpText = (props: HelpTextProps) => {
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
        > {props.text} </Text>
    );
};

export default HelpText;
