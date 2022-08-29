import * as React from 'react';
import HelpText from "../../components/Typography/HelpText";
import {Avatar} from "react-native-paper";
import {StyleSheet} from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import {Surface, Text} from 'react-native-paper';
import TitleTypography from "../../components/Typography/TitleTypography";
import ContactCard from "../../components/Contact/ContactCard";
import SubTitleTypography from "../../components/Typography/SubTitleTypography";

interface TrustedContactsProps {

}

const TrustedContacts = (props: TrustedContactsProps) => {
    return (
        <Surface style={styles.container}>
            <Surface style={styles.user}>
                <TitleTypography text={'NOMBRE DE USUARIO'}/>
                <Avatar.Icon size={96} icon="account"/>
            </Surface>
            <SubTitleTypography text={'Lista de contactos de Confianza '}/>
            <Surface style={styles.list}>
                <ContactCard name={'Nombre de usuario'}/>
                <ContactCard name={'Nombre de usuario 2'}/>
                <ContactCard name={'Nombre de usuario 3'}/>
            </Surface>

            <PrimaryButton label={'Agregar nuevo contacto'} onPress={() => {

            }}/>
            <PrimaryButton label={'Editar lista de contactos'} onPress={() => {

            }}/>


        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    list: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 12,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        padding: 12
    }
})

export default TrustedContacts;
