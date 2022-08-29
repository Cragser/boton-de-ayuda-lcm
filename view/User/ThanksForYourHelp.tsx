import * as React from 'react';
import {View, Text } from 'react-native';
import {Avatar} from "react-native-paper";
import HelpText from "../../components/Typography/HelpText";
interface ThanksForYourHelpProps {

}

const ThanksForYourHelp  = (props: ThanksForYourHelpProps) => {
 return (
  <View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding: 12}}>
          <HelpText text={'NOMBRE DE USUARIO'}  />
          <Avatar.Icon size={128} icon="account"/>
      </View>
  </View>
 );
};

export default ThanksForYourHelp;
