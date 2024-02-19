/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  height: 38px;
  width: 70px;

  border-radius: 6px;
  margin-right: 12px;

  background-color: ${({ theme }: any) => theme.COLORS.GRAY_400};

  align-items: center;
  justify-content: center;

  ${({ theme, isActive }: any) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
      background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};
    `}
`

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }: any) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.WHITE};
  `}
`
