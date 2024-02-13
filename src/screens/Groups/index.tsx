import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'

import { Container } from './styles'

import { useState } from 'react'

import { FlatList } from 'react-native'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'Galera da Rocketseat',
    'toda familia',
    'todos da igreja',
    'weliton',
    'karine',
    'karol',
    'Laisa',
    'Luis',
  ])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua Turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

      {/* <GroupCard title="Galera do Ignite" /> */}
    </Container>
  )
}
