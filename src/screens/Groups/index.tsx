import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'

import { Container } from './styles'

import { useState } from 'react'

import { FlatList } from 'react-native'

import { ListEmpty } from '@components/ListEmpty'

import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua Turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal Cadrastar a primeira turma?" />
        )}
      />

      <Button title="Criar Nova Turma" onPress={handleNewGroup} />
    </Container>
  )
}
