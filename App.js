import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import Settings from '././screens/Settings';
import ProfilePage from '././screens/ProfilePage';

const Stack = createStackNavigator();


const App = () => {

  useEffect(() => {
    requestUserPermission()
    getFCMToken()
  }, [])

  const getFCMToken = async () => {
    let token = await messaging().getToken()
    console.log(token, 'token*********()')
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="Settings">
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App