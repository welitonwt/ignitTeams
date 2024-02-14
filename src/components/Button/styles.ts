/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  background-color: ${({ theme, type }: any) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD};
  color: ${({ theme }: any) => theme.COLORS.WHITE};
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`
