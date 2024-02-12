import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styled'

type Props = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...res }: Props) {
  return (
    <Container {...res}>
      <Icon />
      <Title> {title} </Title>
    </Container>
  )
}
