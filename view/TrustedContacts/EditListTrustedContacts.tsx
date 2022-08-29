import * as React from 'react';
import {View, Text} from 'react-native';
import {Divider, Surface, useTheme} from "react-native-paper";
import EditableContactCard from "../../components/Contact/EditableContactCard";
import TitleTypography from "../../components/Typography/TitleTypography";

interface EditListTrustedContactsProps {

}

const EditListTrustedContacts = (props: EditListTrustedContactsProps) => {
    const theme = useTheme();
    return (
        <Surface style={{
            backgroundColor: theme.colors.surface,
            padding: 24,
            height: "100%"
        }}>
            <TitleTypography text={'Editar listados de confianza'}/>
            <View>
                <EditableContactCard name={'Nombre de usuario'}/>
                <EditableContactCard name={'Nombre de usuario 2'}/>
                <EditableContactCard name={'Nombre de usuario 3'}/>
            </View>
        </Surface>
    );
};

export default EditListTrustedContacts;
