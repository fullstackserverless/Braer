import React, { useState, useCallback } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Layout } from '@ui-kitten/components'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const VideoDetail = ({ route }) => {
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false)
      //   Alert.alert("video has finished playing!");
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev)
  }, [])

  // const  videoId = route.params.videoId;
  const videoId = 'http://braer-game.ru/'

  return (
    <Layout style={styles.container} level="3">
      <View>
        <YoutubePlayer
          videoId={route.params.videoId}
          // video height -> screen width
          width={SCREEN_WIDTH}
          // video width -> screen height
          height={SCREEN_HEIGHT / 1.5}
          // prevent aspect ratio auto sizing
          webViewProps={{
            injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            element.style.paddingBottom = 'unset';
            true;
          `
          }}
        />
      </View>
    </Layout>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { VideoDetail }
