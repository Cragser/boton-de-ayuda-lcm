import * as React from 'react';
import {Avatar, Surface, Text} from "react-native-paper";

interface ContactCardProps {
    name: string;
}

const ContactCard = (props: ContactCardProps) => {
    return (
        <Surface style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginTop: 12,
        }}>
            <Avatar.Icon size={48} icon="account" style={{
                marginRight: 12
            }}/>
            <Text style={{fontSize: 16}}>{props.name}</Text>
        </Surface>
    );
};

export default ContactCard;
