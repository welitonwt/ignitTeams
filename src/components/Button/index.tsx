import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Title,
  ButtonTypeStyleProps,
  ButtonStyleWide,
  ButtonActiveStyleProps,
} from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
  wide?: ButtonStyleWide
  active?: ButtonActiveStyleProps
}

export function Button({
  title,
  type = 'PRIMARY',
  wide = '',
  active = '',
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest} wide={wide} active={active}>
      <Title>{title}</Title>
    </Container>
  )
}
