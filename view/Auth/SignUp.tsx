import * as React from 'react';
import {Text, View} from "react-native";
import * as Yup from "yup";
import {FormikValues} from "formik";
import FormFormik from "../../components/form/FormFormik";
import {TextInputFormik} from "../../components/TextInput/TextInputFormik";
import {TextInputFormikPassword} from "../../components/TextInput/TextInputFormikPassword";
import PrimaryButton from "../../components/Button/PrimaryButton";
import {Avatar} from "react-native-paper";

interface SignUpProps {

}

const SignUp = (props: SignUpProps) => {
    const schema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        birthday: Yup.string()
            .required('Required'),
        telephone: Yup.string()
            .required('Required'),
        country: Yup.string()
            .required('Required'),
        genre: Yup.string()
            .required('Required'),
    });

    const onSubmit = async (values: FormikValues) => {

    }

    return (
        <FormFormik
            validationSchema={schema}
            onSubmit={onSubmit}
            customChildren={props => <>
                <TextInputFormik {...props} label={'Nombre'} name={'name'} type={'name'}/>
                <TextInputFormik {...props} label={'Correo electrónico'} name={'email'} type={'emailAddress'}/>
                <TextInputFormikPassword {...props} label={'Contraseña'} name={'password'}/>
                <TextInputFormik {...props} label={'Fecha de nacimiento'} name={'birthday'}/>
                <TextInputFormik {...props} label={'Teléfono'} name={'telephone'} type={'telephoneNumber'}/>
                <TextInputFormik {...props} label={'País'} name={'country'} type={'countryName'}/>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 12}}>
                    <Avatar.Icon size={86} icon="account"/>
                </View>
                <PrimaryButton label={'Registrarse'} onPress={() => {
                }}/>

            </>
            }
        />

    );
};

export default SignUp;
