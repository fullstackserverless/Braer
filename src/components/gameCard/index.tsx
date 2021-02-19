import React from 'react'

import { StyleSheet, Linking, Alert, TouchableOpacity, Image, View } from 'react-native'

import { Text } from '@ui-kitten/components'

const GameCard = ({ title, gameLink, coverSource, IconComponent, OnPressHandler }) => {
  const [cardTitle, setCardTitle] = React.useState('...')

  React.useEffect(() => {
    fetch(gameLink)
      .then(response => response.text())
      .then(domString => setCardTitle(domString.match('<title>(.*?)</title>')[0].slice(7, -8)))
      .catch(error => console.error(error))
      .finally(() => null)
  }, [])

  const cardOnPressHandler = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(gameLink)

    if (supported) {
      OnPressHandler(gameLink)
    } else {
      Alert.alert(`Don't know how to open this URL: ${gameLink}`)
    }
  }, [gameLink])

  return (
    <TouchableOpacity onPress={cardOnPressHandler}>
      <View style={styles.cardContainer}>
        <View style={styles.cardCover}>
          <Image style={styles.coverImage} resizeMethod="resize" source={coverSource} />
        </View>
        <View style={styles.cardAboutContainer}>
          <View>
            <IconComponent />
          </View>
          <View style={styles.titleContainer}>
            <Text>{cardTitle}</Text>
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

export { GameCard }
