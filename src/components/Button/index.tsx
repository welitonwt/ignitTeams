import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Title,
  ButtonTypeStyleProps,
  ButtonStyleWide,
} from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
  wide?: ButtonStyleWide
}

export function Button({ title, type = 'PRIMARY', wide = '', ...rest }: Props) {
  return (
    <Container type={type} {...rest} wide={wide}>
      <Title>{title}</Title>
    </Container>
  )
}
