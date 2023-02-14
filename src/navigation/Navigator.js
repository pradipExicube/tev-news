import React from 'react'

//Navigation Import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Screen import
import TabNavigator from './TabNavigator';
//import OrderHistory from '../screens/OrdersHistoryPage/OrderHistory';
import {
    OrderHistory
} from '../screens'

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OrderHistory"
                    component={OrderHistory}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;