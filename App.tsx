/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import Config from './src/utils/Config';
import messaging from '@react-native-firebase/messaging';

LogBox.ignoreLogs(['Usage of "messaging().registerDeviceForRemoteMessages()"'])


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };






  useEffect(() => {
    //Only For Android
    const initial = async () => {
      // Assume a message-notification contains a "type" property in the data payload of the screen to open
      
      try {
        await messaging().registerDeviceForRemoteMessages();
      } catch (error) {
        console.log('registerDeviceForRemoteMessages Errror: ', error);
      }

      messaging().setBackgroundMessageHandler(async i =>
        console.log(i, 'BACKGROUND MESSAGE'),
      );
      messaging().onMessage(async rm => {
        let msg = rm?.notification;
        if (msg && msg?.body) {
          console.log('=================onMessage===================');
          console.log(rm);
          console.log('====================================');
          // showNoti(msg?.title, msg?.body);
        }
      });

      messaging().onNotificationOpenedApp(rm => {
        let msg = rm?.notification;
        if (msg && msg?.body) {
          console.log('=================onNotificationOpenedApp===================');
          console.log(rm);
          console.log('====================================');
        }
      });
      // Check whether an initial notification is available
      messaging()
        .getInitialNotification()
        .then(rm => {
          let msg = rm?.notification;
          if (msg && msg?.body) {
            console.log('=============getInitialNotification=======================');
            console.log(rm);
            console.log('====================================');
          }
        });
    };

    initial();
  }, []);

  useEffect(() => {
    // The screen is focused
      callApi() 
}, []);

  const callApi = async () => {
    if (Platform.OS ===  'ios') {
      requestUserPermission();
    } else {
      try {
        if (Number(Platform.Version) >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          );

          await getToken();
        }
      } catch (error) {
        console.log('POST_NOTIFICATIONS error', error);
      }
    }
  }


  async function requestUserPermission() {
    try {
      const authStatus = await messaging().requestPermission();
      await getToken();
      // console.log('AuthStatus:', authStatus)
    //   const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    // if (enabled) {
    //   console.log('Authorization status:', authStatus);
    // }
    } catch (error) {
      console.log('messaging requestPermission', error);
    }
  }

  const getToken = async () => {
    try {
      const token = await messaging().getToken();
     console.log('===============token=====================');
     console.log(token);
     console.log('====================================');
    } catch (error) {
      console.log('get Token error : ', error);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={styles.container}>
            <Text>Env:  {Config.ENV}</Text>
            <Text>Login:  {Config.LoginApi}</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex:1,justifyContent:"center",alignItems:'center'}
  });

export default App;