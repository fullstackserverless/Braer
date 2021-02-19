import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import YouTube from 'react-native-youtube'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 500,
    backgroundColor: 'rgba(35,42,67,0.5)'
  }
})

type YouTubePlayerT = {
  play: boolean
  uri: string
  fullscreen: boolean
  closePlayerHandler: () => void
}
const apiKey = 'AIzaSyDLM6S57hfLoFfkovMzxdmO-sCdS8USQqY'

const YouTubePlayer = memo(({ play, uri, fullscreen, closePlayerHandler }: YouTubePlayerT) => (
  <YouTube
    videoId={uri}
    apiKey={apiKey}
    play={play}
    loop
    fullscreen={fullscreen}
    loop={false}
    onReady={e => console.log('onReady')}
    onChangeState={e => console.log('onChangeState:', e.state)}
    onChangeQuality={e => console.log('onChangeQuality: ', e.quality)}
    onError={e => console.log('onError: ', e.error)}
    style={styles.container}
    resumePlayAndroid={false}
    onChangeFullscreen={e => {
      console.log('onChangeFullscreen: ', e.isFullscreen)
      closePlayerHandler(e.isFullscreen)
    }}
  />
))

export { YouTubePlayer }
