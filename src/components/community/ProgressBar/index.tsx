import { Container, Progress } from './styles'

export interface ProgressBarProps {
  percentage: number
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <Container>
      <Progress percentage={percentage} />
    </Container>
  )
}
