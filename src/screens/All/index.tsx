import React, { useContext } from 'react'

import { ImageProps, StyleSheet, ScrollView, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Layout, Spinner } from '@ui-kitten/components'

import { YouTubePlayer } from './../../components/youtubePlayer/'

import { Icons } from './../../components/Icons'
import { VideoCard } from './../../components/videoCard'

import { GameCard } from './../../components/gameCard'
import { DATA_STORE } from './../../../DataStore'

// import { VideoDetail } from "./../Videos/videoDetail";
// import { GameWebView } from './../Games/GameWebView'
import { GameContext } from './../../contexts/gameContext'

const AllSrceen = props => {
  const [loadingStatus, setLoadingStatus] = React.useState(true)
  const [List, setList] = React.useState([])

  const [currentPlayVideo, setCurrentPlayVideo] = React.useState(null)
  const [videoFullscreen, setVideoFullscreen] = React.useState(true)

  const [, { changeGameStatus }] = useContext(GameContext)

  React.useEffect(() => {
    setList([...DATA_STORE.GAMES, ...DATA_STORE.VIDEOS])
    setLoadingStatus(false)
  }, [])

  const playVideoHandler = videoId => {
    console.log('Видео ид ->', videoId)
    setCurrentPlayVideo(videoId)
  }

  const closeVideoPlayerHandler = isFullscreen => {
    if (isFullscreen) {
      return
    }

    setVideoFullscreen(false)
    setCurrentPlayVideo(null)
    setVideoFullscreen(true)
  }

  return (
    <>
      <Layout style={styles.container} level="3">
        {loadingStatus ? (
          <View style={styles.preloaderContainer}>
            <Spinner />
          </View>
        ) : (
          <ScrollView>
            {List.map((item, index) => {
              if (item.type === 'game') {
                return (
                  <GameCard
                    key={index}
                    title={item.title}
                    coverSource={item.coverSource}
                    gameLink={item.link}
                    IconComponent={Icons('game-console')}
                    OnPressHandler={() => changeGameStatus({ play: true, gameLink: item.link })}
                  />
                )
              } else if (item.type !== 'game') {
                return (
                  <VideoCard
                    key={index}
                    title={item.title}
                    videoLink={item.link}
                    coverSource={item.coverSource}
                    IconComponent={Icons('film')}
                    onPressCardHandler={playVideoHandler}
                  />
                )
              }
            })}
          </ScrollView>
        )}
      </Layout>

      {currentPlayVideo && (
        <YouTubePlayer
          play={true}
          uri={currentPlayVideo}
          fullscreen={videoFullscreen}
          closePlayerHandler={closeVideoPlayerHandler}
        />
      )}
    </>
  )
}

const { Navigator, Screen } = createStackNavigator()
const AllNavigator = () => (
  <Navigator>
    <Screen name="ALL" component={AllSrceen} options={{ headerShown: false }} />
    {/* <Screen name="GAME" component={GameWebView} options={{ headerShown: true }} /> */}
    {/* <Screen
      name="VIDEO"
      component={VideoDetail}
      options={{ headerShown: true }}
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
export { AllNavigator }
