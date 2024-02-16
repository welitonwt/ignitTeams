/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/native'

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
