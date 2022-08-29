import * as React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import LogIn from "../../view/Auth/LogIn";
import MainHeader from "../../components/Header/MainHeader";
import SignUp from "../../view/Auth/SignUp";
import RecoveryPassword from "../../view/Auth/RecoveryPassword";
import {AuthDrawerParamList} from "../../types";


const Drawer = createDrawerNavigator<AuthDrawerParamList>();

const AuthDrawer = ({navigation}: any) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                header: props => <MainHeader navigate={props}/>,
            }}
            initialRouteName={'RecoveryPassword'}
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
        </Drawer.Navigator>
    );
};

export default AuthDrawer;
