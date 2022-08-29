import * as React from 'react';
import {Avatar, Divider, FAB, Surface, Text, useTheme} from "react-native-paper";
import {View} from "react-native";

interface EditableContactCardProps {
    name: string;
}

const EditableContactCard = (props: EditableContactCardProps) => {
    const theme = useTheme();
    return (
        <>
            <Surface style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 12,
                padding: 12,
                backgroundColor: theme.colors.background,
                borderRadius: 12
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Avatar.Icon
                        size={64}
                        icon="account" style={{
                        marginRight: 12,
                        backgroundColor: "#E4E8EC",

                    }}/>
                    <Text style={{fontSize: 16, marginRight: 12}}>{props.name}</Text>
                </View>
                <FAB
                    icon="close"
                    style={{
                        margin: 16,

                    }}
                    theme={{colors: {accent: "red"}}}
                    onPress={() => console.log('Pressed')}

                />
            </Surface>
            <Divider/>
        </>
    );
};

export default EditableContactCard;
