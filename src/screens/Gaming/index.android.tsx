import { Button } from '@ui-kitten/components'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { WebView } from 'react-native-webview'
import { Icons } from '../../components/Icons'
import { AndroidDevice, H, W } from './../../constants'

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
    minHeight: H,
    backgroundColor: '#000'
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: '#000',
    width: H,
    height: W,
    ...AndroidDevice.select({
      'diagonal4.7': { paddingTop: '53%' }, //✅
      'diagonal5.0': { paddingTop: '65%' }, //✅
      // 'diagonal5.1'✅
      // 'diagonal5.2'✅
      // 'diagonal5.5'✅
      'diagonal5.6': { paddingTop: '95%', height: W - 300 }, //✅
      'diagonal5.7': { paddingTop: '84%', height: W - 100 }, //✅
      // 'diagonal5.96': { paddingTop: '53%' }, //✅
      'diagonal6.0': { paddingTop: '90%', height: W - 500 }, //✅
      'diagonal6.3': { paddingTop: '87%', height: W - 100 }, //✅
      'diagonal6.5': { paddingTop: '107%', height: W - 600 }, //✅
      'diagonal6.53': { paddingTop: '105%', height: W - 900 }, //✅
      'diagonal6.8': { paddingTop: '80%' } //✅
    }),

    transform: [{ rotate: '90deg' }],
    zIndex: 10
  },
  closeWebViewButtonContainer: {
    position: 'absolute',
    minWidth: 40,
    minHeight: 30,
    maxWidth: 40,
    maxHeight: 30,
    bottom: 20,
    left: 10,
    zIndex: 11
  }
})

export { GamingScreen }
