# React Native + android studio + Visual Studio Code

A template for react native app (CLI)

## Visual Studio Code

1. Download and install VS Code here : https://code.visualstudio.com/download

2. VS Code Extensions to install :

- React Native Tools
- React-Native/React/Redux snippets for es6/es7
- Prettier
- Material Icon Theme
- Eslint

3. Configure Prettier:

- File -> Preferences -> Settings -> search: "formatons" -> check "Format a file on save"
- ctrl + shift + p -> select: "Format Document" -> select "Configure Default Formatter" -> Select Prettier - Code formatter

## Android Studio

1. Download and Install Android Studio here https://developer.android.com/studio

2. Configure the ANDROID_HOME environment variable :

   - Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc :

     export ANDROID_HOME=$HOME/Android/Sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/tools
     export PATH=$PATH:$ANDROID_HOME/tools/bin
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     export PATH

3. Go to the android-studio/bin folder and run ./studio.sh

4. Android Studio Settings :

- File -> Settings -> System Settings -> Android SDK -> check "Android 10.0 (Q)" (recommended) -> click Ok (install)

- Create Android Virtual Device (AVD): Configure -> AVD Manager -> Create virtual device... -> Select Pixel 2 or 3 and click Next ->
  Tab x86 Images -> Select "Q" -> Next -> Finish -> click on play icon

## Create & Start App

1. npx react-native init Nom_du_projet
2. cd Nom_du_projet -> npx react-native start
3. npx react-native run-android

Official document : https://reactnative.dev/docs/getting-started
