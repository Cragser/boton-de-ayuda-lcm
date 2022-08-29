import {createStackNavigator} from "@react-navigation/stack";
import {RootStackParamList} from "../../types";
import * as React from "react";
import AuthDrawer from "../drawer/AuthDrawer";
import UserDrawer from "../drawer/UserDrawer";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'User'}
        >
            <Stack.Screen name={'User'} component={UserDrawer}/>
            <Stack.Screen name={'Auth'} component={AuthDrawer}/>
            {/*<Stack.Screen name={'SignUp'} component={SignUp}/>*/}
            {/*<Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>*/}
            {/*<Stack.Screen name='MainDrawer' component={MainDrawer}/>*/}
            {/*<Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>*/}
            {/*<Stack.Group screenOptions={{presentation: 'modal'}}>*/}
            {/*    <Stack.Screen name="Modal" component={ModalScreen}/>*/}
            {/*</Stack.Group>*/}
        </Stack.Navigator>
    );
}


export default RootNavigator
