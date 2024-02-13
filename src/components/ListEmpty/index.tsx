import { Container, Message } from './styled'

type Props = {
  message: string
}

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
