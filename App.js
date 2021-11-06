import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { Home } from './src/screens/'
import { ViewModeProvider } from './src/contexts/ViewModeContext'

const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        border: 'transparent'
    }
}

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <ViewModeProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Home'}
                >
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </ViewModeProvider>
    )
}

export default App