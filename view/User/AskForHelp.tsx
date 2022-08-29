import * as React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {Avatar, Button, FAB, Surface, useTheme} from 'react-native-paper';
import SubTitleTypography from "../../components/Typography/SubTitleTypography";
import BadgeSurfacePrimary from "../../components/Surfaces/BadgeSurfacePrimary";
import TitleTypography from "../../components/Typography/TitleTypography";

interface AskForHelpProps {

}

// Show a pressable red button
const AskForHelp = (props: AskForHelpProps) => {
    const theme = useTheme();
    return (
        <>
            <TitleTypography text={'AUXILIO'}/>
            <Pressable style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Pressable onPress={() => {
                    alert('Solicitando ayuda');
                }}>
                    <Avatar.Icon
                        size={128}
                        icon="alert"
                    />
                </Pressable>
                <BadgeSurfacePrimary text={'Marcas'}/>
                <View>
                    <Image source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                           style={{
                               width: 200,
                               height: 300,
                           }}
                    />
                </View>

                <BadgeSurfacePrimary text={'Patrocinadores'}/>


            </Pressable>
        </>
    );
};

export default AskForHelp;
