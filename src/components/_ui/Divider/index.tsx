import { Container, Wrapper } from './styles'

interface HorizontalDividerProps {
  style?: any
}
export const HorizontalDivider = ({ style }: HorizontalDividerProps) => {
  return (
    <Container style={{ ...style }}>
      <Wrapper />
    </Container>
  )
}
