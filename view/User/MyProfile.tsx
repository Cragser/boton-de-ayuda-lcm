import * as React from 'react';
import {View, Text} from 'react-native';
import * as Yup from "yup";
import {FormikValues} from "formik";
import FormFormik from "../../components/form/FormFormik";
import {TextInputFormik} from "../../components/TextInput/TextInputFormik";
import {TextInputFormikPassword} from "../../components/TextInput/TextInputFormikPassword";
import {Avatar} from "react-native-paper";
import PrimaryButton from "../../components/Button/PrimaryButton";

interface MyProfileProps {

}

const MyProfile = (props: MyProfileProps) => {
    const schema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        telephone: Yup.string()
            .required('Required'),
        birthday: Yup.string()
            .required('Required'),
        country: Yup.string()
            .required('Required'),
        gender: Yup.string()

    });

    const onSubmit = async (values: FormikValues) => {

    }

    return (
        <FormFormik
            validationSchema={schema}
            onSubmit={onSubmit}
            customChildren={props => <>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 12}}>
                    <Avatar.Icon size={128} icon="account"/>
                </View>
                <TextInputFormik {...props} label={'Nombre'} name={'name'} type={'name'}/>
                <TextInputFormik {...props} label={'Correo electrónico'} name={'email'} type={'emailAddress'}/>
                <TextInputFormik {...props} label={'Fecha de nacimiento'} name={'birthday'}/>
                <TextInputFormik {...props} label={'Teléfono'} name={'telephone'} type={'telephoneNumber'}/>
                <TextInputFormik {...props} label={'País'} name={'country'} type={'countryName'}/>
                <TextInputFormik {...props} label={'Genero'} name={'genre'}/>
                <PrimaryButton label={'Registrarse'} onPress={() => {
                }}/>

            </>
            }
        />
    );
};

export default MyProfile;
