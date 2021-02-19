import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const PageHeader = ({ LogoComponent, backgroundColor }) => {
  console.log(backgroundColor)
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <LogoComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
    ...ifIphoneX(
      {
        paddingTop: 50,
        paddingBottom: 20
      },
      {
        paddingTop: 20
      }
    )
  }
})

export { PageHeader }
