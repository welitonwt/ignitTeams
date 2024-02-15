import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'

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

        <Button title="Criar" wide="WIDE" />
      </Content>
    </Container>
  )
}
