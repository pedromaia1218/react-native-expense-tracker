import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { Home } from './src/screens/'

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
    )
}

export default App