This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli). And I have Installed (https://github.com/luggit/react-native-config). Created with multiple environment and flavours in one application.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

1. Install react-native-config from https://github.com/luggit/react-native-config
2. Add apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle" in 2 nd line of android/app/build.gradle
3. Create .env & .env.prod file in root folder
4. Declare variable in ".env & .env.prod"

API_URL=https://myapi.com

5. Get that variable in App.tsx with 

import Config from 'react-native-config';
console.log(Config.API_URL);


6. Add script in Package.json file.

    "start": "react-native start -- --reset-cache",
    "android": "npx react-native run-android --mode=qaDebug --appIdSuffix=qa",
    "runqa": "npx react-native run-android --mode=qaDebug --appIdSuffix=qa",
    "runprod": "react-native run-android --mode=prodDebug",
    "relqa": "cd android && ./gradlew assembleQaRelease && cd ..",
    "relprod": "cd android && ./gradlew assembleProdRelease && cd ..",


4. run yarn android
5. Create QA and Prod Folder inside android/app
6. Create fire base app and Inside that please add 2 google service JSON and respective folders.
7. Please refer this repo for Adroid flavours.
8. Change Name and Icon for QA and Prod
9. Run qa and prod app

Good to go.



# Ref Links

https://www.youtube.com/watch?v=x6lCIYw1W5c

https://www.npmjs.com/package/react-native-config

https://www.youtube.com/watch?v=8lA0wP-0vEo

https://www.youtube.com/watch?v=TvBm7UZNyy8

https://blog.logicwind.com/multiple-flavor-react-native-app/

https://dev.to/leon_arantes/react-native-multiple-environments-setup-schemaflavors-3l7p

https://www.youtube.com/watch?v=gWELlncvISo

https://www.youtube.com/watch?v=CnLbSLMRbOQ

https://medium.com/@ywongcode/building-multiple-versions-of-a-react-native-app-4361252ddde5

https://medium.com/simform-engineering/how-to-set-up-different-environments-in-react-native-9f7902ebf282




# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
