import * as React from 'react';
import {HelperText, TextInput} from "react-native-paper";
import {FormikPartials} from "../form/FormFormik";

type KeyboardType = 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';

type TypeInput =
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined;



interface TextInputFormikProps extends FormikPartials {
    label: string;
    name: string;
    type?: TypeInput;
    keyboardType?: KeyboardType
}


const TextInputFormik = (
    {
        values,
        handleChange,
        errors,
        name,
        label,
        type,
        keyboardType
    }: TextInputFormikProps) => {
    const textInputValues: Partial<TextInputFormikProps> = {}
    if (type !== undefined) {
        textInputValues['type'] = type
    }
    if (keyboardType !== undefined) {
        textInputValues['keyboardType'] = keyboardType
    }
    return (
        <>
            <TextInput
                mode='outlined'
                label={label}
                returnKeyType="next"
                style={{width: '100%'}}
                value={values[name]}
                onChangeText={handleChange(name)}
                {...textInputValues}
            />
            {errors[name] && <HelperText type="error">{errors[name]}</HelperText>}
        </>
    );
};

export {TextInputFormik};
