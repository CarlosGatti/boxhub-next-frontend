import { Button, Container, Divider } from './styles'

export const PrivacyTerms = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Button>Privacy</Button>
      <Divider />

      <Button>Terms</Button>
      <Divider />
      <Button>Cookies</Button>
    </Container>
  )
}
