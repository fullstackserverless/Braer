import React from 'react'
import { useColorScheme } from 'react-native'
import { SvgXml } from 'react-native-svg'
import DarkLogo from './../../assets/logo-dark.svg'
import LightLogo from './../../assets/logo-light.svg'

const AppLogo = () => {
  const colorScheme = useColorScheme()
  const currentLogo = colorScheme === 'light' ? LightLogo : DarkLogo
  const LogoSvg = <SvgXml xml={currentLogo} />
  return LogoSvg
}

export { AppLogo }
