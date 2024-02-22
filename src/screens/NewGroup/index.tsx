import { useState } from 'react'

import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '@storage/group/groupCreate'

export function NewGroup() {
  const navigation = useNavigation()
  const [groupName, setGroupName] = useState<string>('')

  async function handleNew() {
    try {
      await groupCreate(groupName)
      navigation.navigate('players', { groupName })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adiconar as pessoas"
        />

        <Input placeholder="Nome da Turma " onChangeText={setGroupName} />

        <Button
          style={{ marginTop: 20 }}
          title="Criar"
          wide="WIDE"
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
