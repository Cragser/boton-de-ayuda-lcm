import * as React from 'react';
import {View, Text} from "react-native";
import * as Yup from "yup";
import FormFormik from "../../components/form/FormFormik";
import {TextInputFormik} from "../../components/TextInput/TextInputFormik";
import {TextInputFormikPassword} from "../../components/TextInput/TextInputFormikPassword";
import LinkTypography from "../../components/Typography/LinkTypography";
import SocialButton from "../../components/Button/SocialButton";
import HelpText from "../../components/Typography/HelpText";
import CentralTypography from "../../components/Typography/CentralTypography";
import PrimaryButton from "../../components/Button/PrimaryButton";

interface RecoveryPasswordProps {

}

const RecoveryPassword = (props: RecoveryPasswordProps) => {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        confirmPassword: Yup.string()
            .required('Required')
    });

    const onSubmit = async (values: any) => {

    }
    return (
        <FormFormik
            validationSchema={schema}
            onSubmit={onSubmit}
            customChildren={props => <>
                <TextInputFormik {...props} label={'Correo electrónico'} name={'email'}/>
                <TextInputFormikPassword {...props} label={'Nueva contraseña'} name={'password'}/>
                <TextInputFormikPassword {...props} label={'Confirmar contraseña'} name={'password'}/>
                <PrimaryButton label={'Enviar'} onPress={() => {
                }}/>


            </>}
        />
    );
};

export default RecoveryPassword;
