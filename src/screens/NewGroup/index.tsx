import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adiconar as pessoas"
        />

        <Input placeholder="Nome da Turma " />

        <Button style={{ marginTop: 20 }} title="Criar" wide="WIDE" />
      </Content>
    </Container>
  )
}
