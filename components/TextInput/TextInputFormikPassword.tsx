import * as React from 'react';
import {HelperText, TextInput} from "react-native-paper";
import {GestureResponderEvent} from "react-native";
import {FormikPartials} from "../form/FormFormik";

interface TextInputFormikProps extends FormikPartials {
    name: string;
    label: string;
}

const TextInputFormikPassword = (
    {
        values,
        handleChange,
        errors,
        name,
        label,
    }: TextInputFormikProps) => {
    const [secure, setSecure] = React.useState(true);

    const onPressIcon = (event: GestureResponderEvent) => {
        setSecure(!secure);
    };

    return (
        <>
            <TextInput
                mode='outlined'
                label={label}
                returnKeyType="next"
                style={{width: '100%'}}
                value={values[name]}
                onChangeText={handleChange(name)}
                secureTextEntry={secure}
                right={<TextInput.Icon name="eye" onPress={onPressIcon}/>}
            />
            {errors[name] && <HelperText type="error">{errors[name]}</HelperText>}
        </>
    );
};

export {TextInputFormikPassword}
