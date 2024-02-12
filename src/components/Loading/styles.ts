/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({ theme }: any) => theme.COLORS.GRAY_600};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: any) => ({
    color: theme.COLORS.GRAY_200,
    size: 52,
  }),
)``
