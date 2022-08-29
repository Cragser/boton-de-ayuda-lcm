import * as React from 'react';
import {Text} from 'react-native-paper';

interface SubTitleTypographyProps {
    text: string;
}

const SubTitleTypography = (props: SubTitleTypographyProps) => {
    return (
        <Text
            style={{
                fontSize: 20,
            }}> {props.text} </Text>
    );
};

export default SubTitleTypography;
