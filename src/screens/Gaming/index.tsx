import { Button } from '@ui-kitten/components'
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { WebView } from 'react-native-webview'
import { Icons } from '../../components/Icons'
import { H, IosDevice, W } from './../../constants'

const GamingScreen = ({ gameLink, handlers }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.gameViewContainer}>
        <View style={styles.webViewContainer}>
          <View style={styles.closeWebViewButtonContainer}>
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
              <Button
                size="small"
                status="warning"
                style={{
                  backgroundColor: 'rgba(241, 156, 74,0.6)',
                  borderColor: '#F19C4A',
                  color: '#F19C4A'
                  // borderRadius: 35 / 2
                }}
                accessoryLeft={Icons('close')}
                onPress={handlers.closeGame}
              />
            </View>
          </View>
          <WebView source={{ uri: gameLink }} />
        </View>
      </View>
    </>
  )
}

const styles = ScaledSheet.create({
  gameViewContainer: {
    minWidth: W,
    minHeight: H
  },
  webViewContainer: {
    flex: 1,

    ...IosDevice.select({
      mobile314: {
        paddingTop: '43%'
      },
      mobile341: {
        paddingTop: Platform.OS === 'ios' ? '43%' : '43%'
      },
      mobile359: {
        paddingTop: '43%'
      },
      mobile374: {
        paddingTop: '43%'
      },
      // iPhone11Pro
      // mobile384: {
      //   // add special android
      //   paddingTop: Platform.OS === 'ios' ? '54%' : '38%' // android 4.7
      // },
      mobile399: {
        paddingTop: '54%'
      },
      mobile409: {
        paddingTop: Platform.OS === 'ios' ? '54%' : '45%'
      },
      // iPhone11, 11 Pro Max
      mobile411: {
        // add special android
        paddingTop: Platform.OS === 'ios' ? '54%' : '40%' //android 5.5 5.0
      },
      mobile414: {
        paddingTop: Platform.OS === 'ios' ? '54%' : '46%' //android 6.3
      },
      mobile480: {
        paddingTop: Platform.OS === 'ios' ? '54%' : '48%' // android 6.0
      },
      mobile480more: {
        paddingTop: Platform.OS === 'ios' ? '54%' : '54%'
      }
    }),
    backgroundColor: '#000',
    height: W,
    width: H,
    transform: [{ rotate: '90deg' }],
    zIndex: 10
  },
  closeWebViewButtonContainer: {
    position: 'absolute',
    minWidth: 40,
    minHeight: 30,
    maxWidth: 40,
    maxHeight: 30,
    bottom: Platform.OS === 'ios' ? 20 : 40,
    left: 10,
    zIndex: 11
  }
})

export { GamingScreen }
