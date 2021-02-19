# Run application

Clone the repository:
```sh
git clone <git_url>
```


Install dependencies:
```sh
  cd <cloning_project_name>
```
```sh
  yarn install
```

Run IOS:
```sh
  cd ./ios && pod install
```
```sh
  cd .. && yarn run ios
```

Run Android:
```sh
  yarn run android
```

## Build android
! Change build version in <project_folder>/android/app/src/build.gradle file
```sh
  cd ./android
```
```sh
  ./gradlew assembleRelease"
```
see buld in folder: <project_folder>/android/app/build/outputs/apk/release
