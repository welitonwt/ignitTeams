import { Container, Logo, BackIcon, BackButton, BackHome } from './styles'

import logoImg from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }
  function handleGoHome() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <BackHome onPress={handleGoHome}>
        <Logo source={logoImg} />
      </BackHome>
    </Container>
  )
}
