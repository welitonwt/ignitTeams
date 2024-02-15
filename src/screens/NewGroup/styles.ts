/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }: any) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`
