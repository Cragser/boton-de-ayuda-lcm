import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/Navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#51081A'
    },
    version: 0
};

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider style={{}}>
                {/*<StatusBar/>*/}
                <PaperProvider theme={theme}>
                    <Navigation colorScheme={colorScheme}/>
                </PaperProvider>
            </SafeAreaProvider>
        );
    }
}
