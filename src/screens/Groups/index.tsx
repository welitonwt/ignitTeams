import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'

import { Container } from './styles'

import { useState } from 'react'

import { FlatList } from 'react-native'

import { ListEmpty } from '@components/ListEmpty'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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

      {/* <GroupCard title="Galera do Ignite" /> */}
    </Container>
  )
}
