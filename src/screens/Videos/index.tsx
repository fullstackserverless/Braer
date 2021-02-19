import React from 'react'

import { StyleSheet, ScrollView, Alert, useColorScheme, View } from 'react-native'
import { Layout, Spinner } from '@ui-kitten/components'
import { createStackNavigator } from '@react-navigation/stack'
import { VideoCard } from './../../components/videoCard'

import { YouTubePlayer } from './../../components/youtubePlayer/'

import { Icons } from './../../components/Icons'
import { DATA_STORE } from './../../../DataStore'
import { lightTheme, darkTheme } from './../../theming/theme-context'

const VideosSrceen = ({ navigation }) => {
  const [loadingStatus, setLoadingStatus] = React.useState(true)
  const [List, setList] = React.useState([])

  const [currentPlayVideo, setCurrentPlayVideo] = React.useState(null)
  const [videoFullscreen, setVideoFullscreen] = React.useState(true)

  React.useEffect(() => {
    setList(DATA_STORE['VIDEOS'])
    setLoadingStatus(false)
    return () => {
      setCurrentPlayVideo(null)
    }
  }, [])

  const playVideoHandler = videoId => {
    console.log('Видео ид ->', videoId)
    setCurrentPlayVideo(videoId)
  }
  const closeVideoPlayerHandler = isFullscreen => {
    if (isFullscreen) return

    setVideoFullscreen(false)
    setCurrentPlayVideo(null)
    setVideoFullscreen(true)
  }
  const hederBG = useColorScheme() === 'light' ? lightTheme.headerBG : darkTheme.headerBG
  return (
    <>
      {
        <Layout style={styles.container} level="3">
          {loadingStatus ? (
            <View style={styles.preloaderContainer}>
              <Spinner />
            </View>
          ) : (
            <ScrollView>
              {List.map((item, index) => (
                <VideoCard
                  key={index}
                  title={item.title}
                  videoLink={item.link}
                  coverSource={item.coverSource}
                  IconComponent={Icons('film')}
                  onPressCardHandler={playVideoHandler}
                />
              ))}
            </ScrollView>
          )}
        </Layout>
      }
      {currentPlayVideo && (
        <YouTubePlayer
          play={false}
          uri={currentPlayVideo}
          fullscreen={videoFullscreen}
          closePlayerHandler={closeVideoPlayerHandler}
        />
      )}
    </>
  )
}

const { Navigator, Screen } = createStackNavigator()
const VideosNavigator = () => (
  <Navigator>
    <Screen name="VIDEOS" component={VideosSrceen} options={{ headerShown: false }} />
    {/* <Screen
      name="VIDEO"
      component={VideoDetail}
      options={{headerShown: false}}
    /> */}
  </Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 22,
    paddingRight: 22
  },
  preloaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }
})
export { VideosNavigator }
