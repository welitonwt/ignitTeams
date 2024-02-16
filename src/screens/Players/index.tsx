import { Container } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />

      <Input placeholder="Nome do participante" />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
