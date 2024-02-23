import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'

// COMPONENTS
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playersGetByGroup } from '@storage/player/playersGetByGroup'

type RouteParams = {
  groupName: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('TIME A')
  const [players, setPlayers] = useState([])

  const route = useRoute()
  const { groupName } = route.params as RouteParams

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova Pessoa',
        'Informe o nome da pessoa para adicionar',
      )
    }

    const newPLayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPLayer, groupName)
      const players = await playersGetByGroup(groupName)
      console.log(players)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={groupName}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time. " />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
