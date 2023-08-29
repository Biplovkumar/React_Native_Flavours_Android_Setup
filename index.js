/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

//get data in Quit state.
messaging().setBackgroundMessageHandler(async (rm) => {
    let msg = rm?.notification
    // showNoti(msg?.title, msg?.body)
    console.log('Message handled in the background!',rm);
});

AppRegistry.registerComponent(appName, () => App);
