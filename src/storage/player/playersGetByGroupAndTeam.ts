/* eslint-disable no-useless-catch */
import { playersGetByGroup } from './playersGetByGroup'

export async function playersGetByGroupAndTeam(
  groupName: string,
  team: string,
) {
  try {
    const storage = await playersGetByGroup(groupName)

    const players = storage.filter((player) => player.team === team)
    return players
  } catch (error) {
    throw error
  }
}
