import { FlatList } from 'react-native'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
// COMPONENTS
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
// import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState('TIME A')
  const [players, setPlayers] = useState(['TIME A', 'TIME B'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['TIME A', 'TIME B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      {/* <Button title="Remover turma" type="SECONDARY" /> */}
    </Container>
  )
}
