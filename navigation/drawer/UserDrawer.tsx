import * as React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import LogIn from "../../view/Auth/LogIn";
import MainHeader from "../../components/Header/MainHeader";
import AskForHelp from "../../view/User/AskForHelp";
import ThanksForYourHelp from "../../view/User/ThanksForYourHelp";
import HelpButton from "../../view/User/HelpButton";
import TrustedContacts from "../../view/User/TrustedContacts";
import MyProfile from "../../view/User/MyProfile";
import RequestForHelp from "../../view/User/RequestForHelp";
import AddNewTrustedContact from "../../view/TrustedContacts/AddNewTrustedContact";
import EditListTrustedContacts from "../../view/TrustedContacts/EditListTrustedContacts";
import SignUp from "../../view/Auth/SignUp";
import RecoveryPassword from "../../view/Auth/RecoveryPassword";


const Drawer = createDrawerNavigator();

const UserDrawer = ({navigation}: any) => {
    return (
        <Drawer.Navigator

            screenOptions={{
                header: props => <MainHeader navigate={props}/>,
            }}
            initialRouteName={'AskForHelp'}
        >

            <Drawer.Screen name="LogIn" component={LogIn} options={{
                title: "Iniciar sesión"
            }}/>
            <Drawer.Screen name="SignUp" component={SignUp} options={{
                title: "Registrarse"
            }}/>
            <Drawer.Screen name="RecoveryPassword" component={RecoveryPassword} options={{
                title: "Recuperar Contraseña"
            }}/>


            <Drawer.Screen name="AskForHelp" component={AskForHelp} options={{
                title: 'Pedir Ayuda'
            }}/>
            <Drawer.Screen name="HelpButton" component={HelpButton} options={{
                title: 'Botón de Ayuda'
            }}/>
            <Drawer.Screen name="MyProfile" component={MyProfile} options={{
                title: 'Mi perfil'
            }}/>
            <Drawer.Screen name="RequestForHelp" component={RequestForHelp} options={{
                title: 'Solicitudes de ayuda'
            }}/>
            <Drawer.Screen name="ThanksForYourHelp" component={ThanksForYourHelp} options={{
                title: 'Gracias por ayudar'
            }}/>
            <Drawer.Screen name="TrustedContacts" component={TrustedContacts} options={{
                title: 'Contactos de confianza'
            }}/>

            <Drawer.Screen name="AddNewTrustedContact" component={AddNewTrustedContact} options={{
                title: 'Agregar contacto'
            }}/>
            <Drawer.Screen name="EditListTrustedContacts" component={EditListTrustedContacts} options={{
                title: 'Editar lista de contactos'
            }}/>
        </Drawer.Navigator>
    );
};

export default UserDrawer;
