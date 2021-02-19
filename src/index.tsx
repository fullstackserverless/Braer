import * as eva from '@eva-design/eva'
import { useDimensions } from '@react-native-community/hooks'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React, { useEffect } from 'react'
import { StatusBar, useColorScheme, View } from 'react-native'
import 'react-native-gesture-handler'
import { AppLogo } from './components/appLogo'
import { PageHeader } from './components/pageHeader'
import { TabNavigator } from './components/tabNavigator'
import { GameContext, GameProvider } from './contexts/gameContext'
import { GamingScreen } from './screens'
import { customDarkTheme, customLightTheme, darkTheme, lightTheme } from './theming/theme-context'

export default function App() {
  const dimensions = useDimensions()
  const colorScheme = useColorScheme()

  useEffect(() => {
    console.log(`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`)
    console.log(`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`)
  })

  const EvaCustomThemeConfig =
    colorScheme === 'light' ? { ...eva.light, ...customLightTheme } : { ...eva.dark, ...customDarkTheme }

  const currentThemeConfig = colorScheme === 'light' ? lightTheme : darkTheme

  const closeGame = changeGameStatus => {
    changeGameStatus({ play: false, gameLink: null })
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar hidden={false} />
      <GameProvider>
        <ApplicationProvider {...eva} theme={EvaCustomThemeConfig}>
          <NavigationContainer>
            <GameContext.Consumer>
              {([GameStatus]) => {
                return (
                  <>
                    {!GameStatus.play && (
                      <View style={{ flex: 1, backgroundColor: currentThemeConfig.headerBG }}>
                        <PageHeader LogoComponent={AppLogo} backgroundColor={currentThemeConfig.headerBG} />
                        <TabNavigator />
                      </View>
                    )}
                  </>
                )
              }}
            </GameContext.Consumer>
          </NavigationContainer>
          <GameContext.Consumer>
            {([GameStatus, { changeGameStatus }]) => {
              return (
                <>
                  {GameStatus.play ? (
                    <GamingScreen
                      gameLink={GameStatus.gameLink}
                      handlers={{
                        closeGame: () => closeGame(changeGameStatus)
                      }}
                    />
                  ) : null}
                </>
              )
            }}
          </GameContext.Consumer>
        </ApplicationProvider>
      </GameProvider>
    </>
  )
}
