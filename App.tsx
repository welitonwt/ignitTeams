/* eslint-disable camelcase */
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'

import theme from './src/styles/theme'

// import { Groups } from './src/screens/Groups'
// import { NewGroup } from './src/screens/NewGroup'
import { Players } from './src/screens/Players'

import { Loading } from './src/components/Loading'

import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
