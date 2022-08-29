import * as React from 'react';
import {Text} from 'react-native-paper';

interface TitleTypographyProps {
    text: string;
}

const TitleTypography = (props: TitleTypographyProps) => {
    return (
        <Text
            style={{
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                flexWrap: 'wrap',
                flex: 1
            }}> {props.text} </Text>
    );
};

export default TitleTypography;
