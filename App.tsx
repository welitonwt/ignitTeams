import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { Groups } from './src/screens/Groups';

import { Loading } from './src/components/Loading'

import { StatusBar } from 'react-native'

export default function App() {
const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor='transparent'
      translucent
    />
   { fontsLoaded ? <Groups /> : <Loading /> }
  </ThemeProvider>

  )

}

