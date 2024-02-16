import { Container, Form } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
