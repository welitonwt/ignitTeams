import { Groups } from './src/screens/Groups';

import Theme from './src/Theme';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading'

export default function App() {
const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
  <ThemeProvider theme={ Theme }>
   { fontsLoaded ? <Groups /> : <Loading /> }
  </ThemeProvider>

  )

}

