/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'
export type ButtonStyleWide = 'WIDE' | ''
export type ButtonActiveStyleProps = 'NOACTIVE' | ''

type Props = {
  type: ButtonTypeStyleProps
  wide: ButtonStyleWide
  active: ButtonActiveStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  width: ${({ wide }: any) => wide === 'WIDE' && '100%'};

  background-color: ${({ theme, type }: any) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  opacity: ${({ active }: any) => (active === 'NOACTIVE' ? 0.3 : 1.0)};
`

export const Title = styled.Text`
  ${({ theme }: any) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
