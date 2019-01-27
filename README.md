# reactStructure
structure basic 
====================================build debug file both step folow complsury ====================================
Step 1 => 
1)  remove build folder from app folder from your porject directory 
2) (in project directory) mkdir android/app/src/main/assets
3)  react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


4)react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

5) cd android/
6) ./gradlew assembleDebug









for android
export PATH="/Users/rushitrivedi/Library/Android/sdk/platform-tools":$PATH

1) delete  build folder from android path 
2) run command 

	mkdir android/app/src/main/assets
3)
 react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

4) 
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

5) cd android
6) ./gradlew assembleDebug
