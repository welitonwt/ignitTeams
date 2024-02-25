import { useState } from 'react'

import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const navigation = useNavigation()
  const [groupName, setGroupName] = useState<string>('')

  const buttonActive = groupName.trim().length === 0

  async function handleNew() {
    try {
      await groupCreate(groupName)
      navigation.navigate('players', { groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Turma', error.message)
      } else {
        Alert.alert('Nova  Turma', 'Não foi possível criar uma nova Turma.')
        console.log(error)
      }
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
          disabled={buttonActive}
          active={buttonActive ? 'INACTIVE' : ''}
        />
      </Content>
    </Container>
  )
}
