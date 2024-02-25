/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'

import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { playersGetByGroup } from './playersGetByGroup'

import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  groupName: string,
) {
  try {
    const storedPlayers = await playersGetByGroup(groupName)

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    )

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupName}`, storage)
  } catch (error) {
    throw error
  }
}
