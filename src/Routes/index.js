import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../../src/RootNavigation';
import DiscoverScreen from '../screens/DiscoverScreen/DiscoverScreen';
import FavouriteScreen from '../screens/FavouriteScreen/FavouriteScreen';



const Stack = createNativeStackNavigator();
 

const index = () => {
    return (
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{headerShown: false, }}>
           <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
           <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
          
                </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  
  export default index;