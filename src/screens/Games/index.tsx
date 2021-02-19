import { createStackNavigator } from '@react-navigation/stack'
import { Layout } from '@ui-kitten/components'
import React, { useContext } from 'react'
import { ScrollView, StyleSheet, useColorScheme } from 'react-native'
import { DATA_STORE } from './../../../DataStore'
import { GameCard } from './../../components/gameCard'
import { Icons } from './../../components/Icons'
import { GameContext } from './../../contexts/gameContext'
import { darkTheme, lightTheme } from './../../theming/theme-context'

const GamesSrceen = props => {
  const [gameList, setGameList] = React.useState([])
  const [PlayedGameStatus, setPlayedGameStatus] = React.useState(false)

  const [, { changeGameStatus }] = useContext(GameContext)

  React.useEffect(() => {
    setGameList(DATA_STORE.GAMES)
  }, [])

  const hederBG = useColorScheme() === 'light' ? lightTheme.headerBG : darkTheme.headerBG

  const runGame = gameLink => {
    changeGameStatus({ play: true, gameLink })
  }

  return (
    <>
      <Layout style={styles.container} level="3">
        <ScrollView>
          {gameList.map((gameItem, index) => (
            <GameCard
              key={index}
              title={gameItem.title}
              coverSource={gameItem.coverSource}
              gameLink={gameItem.link}
              IconComponent={Icons('game-console')}
              OnPressHandler={() => runGame(gameItem.link)}
            />
          ))}
        </ScrollView>
      </Layout>
    </>
  )
}

const { Navigator, Screen } = createStackNavigator()
const GameNavigator = () => (
  <Navigator>
    <Screen name="GAMES" component={GamesSrceen} options={{ headerShown: false }} />
  </Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 22,
    paddingRight: 22
  }
})
export { GamesSrceen }
