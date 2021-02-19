import React from 'react'

import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@ui-kitten/components'

const url = require('url')

const VideoCard = props => {
  const { title, videoLink, coverSource, IconComponent, onPressCardHandler } = props
  const [videoId] = React.useState(url.parse(videoLink).pathname.slice(1))
  const [videoTitle, setVideoTitle] = React.useState('')

  React.useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD9R2ySenDZt8wVE6iq0qGLtW8xm2ndvgg&id=${videoId}&part=snippet`
    )
      .then(response => response.json())
      .then(data => setVideoTitle(data.items[0].snippet.title))
      .catch(error => console.error(error))
      .finally(() => null)
  }, [])

  const cardOnPressHandler = () => {
    onPressCardHandler(videoId)
  }

  return (
    <TouchableOpacity onPress={cardOnPressHandler}>
      <View style={styles.cardContainer}>
        <View style={styles.cardCover}>
          <Image
            style={styles.coverImage}
            resizeMethod="resize"
            source={{
              uri: `https://img.youtube.com/vi/${videoId}/0.jpg`
            }}
          />
        </View>
        <View style={styles.cardAboutContainer}>
          <View style={{ minWidth: 32, minHeight: 32 }}>
            <IconComponent />
          </View>
          <View style={styles.titleContainer}>
            <Text>{videoTitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginBottom: 15
  },
  cardCover: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3F64F6',
    height: 174,
    marginBottom: 8
  },
  cardAboutContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    paddingLeft: 13
  },
  coverImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 10
  }
})

export { VideoCard }
