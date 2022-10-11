import * as React from 'react';
import FormFormik from "../../components/form/FormFormik";
import * as Yup from 'yup';
import {FormikValues} from "formik";
import {TextInputFormik} from "../../components/TextInput/TextInputFormik";
import {TextInputFormikPassword} from "../../components/TextInput/TextInputFormikPassword";
import {Text, useTheme} from 'react-native-paper';
import SocialButton from "../../components/Button/SocialButton";
import CentralTypography from "../../components/Typography/CentralTypography";
import LinkTypography from "../../components/Typography/LinkTypography";
import HelpText from "../../components/Typography/HelpText";

interface LogInProps {
    navigation: any;
}

const LogIn = ({navigation}: LogInProps) => {
    const theme = useTheme();
    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    const onSubmit = async (values: FormikValues) => {
        console.log(values)
    }


    return (
        <FormFormik
            validationSchema={schema}
            onSubmit={onSubmit}
            customChildren={props => <>
                <TextInputFormik {...props} label={'Correo electrónico'} name={'email'}/>
                <TextInputFormikPassword {...props} label={'Contraseña'} name={'password'}/>
                <LinkTypography
                    onPress={() => {
                        navigation.navigate('RecoveryPassword')
                    }}
                    text={'¿Olvidaste tu contraseña?'}
                />
                <SocialButton
                    onPress={() => {
                    }}
                    label={'Iniciar sesión'}
                    bgColor={theme.colors.primary}
                    textColor={'#fff'}
                />
                <HelpText text={'¿No tienes una cuenta? '}/>
                <CentralTypography
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                    text={'Regístrate'}
                />
            </>}
        />

    );
};

export default LogIn;
