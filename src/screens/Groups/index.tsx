import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { groupsGetAll } from '@storage/group/groupsGetAll'

import { Container } from './styles'

import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

export function Groups() {
  const navigation = useNavigation()

  const [groups, setGroups] = useState<string[]>([])

  function handleNewGroup() {
    navigation.navigate('new')
  }
  useFocusEffect(
    useCallback(() => {
      async function fetchGroups() {
        try {
          const data = await groupsGetAll()
          setGroups(data)
        } catch (error) {
          console.log(error)
        }
      }
      console.log('cheguei porra')
      fetchGroups()
    }, []),
  )

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
