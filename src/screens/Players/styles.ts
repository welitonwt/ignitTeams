/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  justify-content: center;

  background-color: ${({ theme }: any) => theme.COLORS.GRAY_700};

  flex-direction: row;

  border-radius: 6px;
`
export const HeaderList = styled.View`
  width: 100%;

  margin: 30px 0 12px;

  flex-direction: row;
  align-items: center;
`

export const NumbersOfPlayers = styled.Text`
  margin-left: 12px;
  ${({ theme }: any) => css`
    color: ${({ theme }: any) => theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`
