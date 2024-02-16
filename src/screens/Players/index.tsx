import { Container } from './styles'

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

      <ButtonIcon />

      <Input placeholder="Nome do participante" />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
