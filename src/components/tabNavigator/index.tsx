import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { AllNavigator, GamesSrceen, VideosNavigator } from './../../screens'
import { BottomTabBar } from './../bottomTabBar'

const { Navigator, Screen } = createBottomTabNavigator()

const getTabBarVisibility = route => {
  // console.log('route', route)
  if (route.name === 'GAMES') {
    return false
  }

  return true
}

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="ALL" component={AllNavigator} />
    <Screen
      name="GAMES"
      component={GamesSrceen}
      options={({ route }) => ({
        tabBarVisible: getTabBarVisibility(route)
      })}
    />
    <Screen name="VIDEOS" component={VideosNavigator} />
  </Navigator>
)

export { TabNavigator }
