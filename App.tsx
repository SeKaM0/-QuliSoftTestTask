import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import {Gallery} from './components/Gallery';
import { ShowImage } from './components/ShowImage';
import { store } from './store';

export type RootStackParams = {
  ShowImage: {
    url: string
  };
  Gallery: any;
}

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="ShowImage" component={ShowImage} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
    
  );
};

export default App;
