import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #191919;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 348px;
  padding: 5px;

  h1 {
    text-align: center;
    padding: 20px;
  }
`
export const TitleForm = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 0 5px;
`

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -5px;
  margin-bottom: 24px;
  color: #878688;
  transition: var(--transition);
  font-size: var(--font-size-xs);
  font-weight: 600;

  &:hover {
    color: var(--color-link-hover);
  }
`
export const MessageErrorAuth = styled.div`
  color: var(--color-danger);
  font-weight: 600;
  width: fit-content;
  margin-top: -20px;
  margin-bottom: 20px;
`

export const SignUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  p {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #878688;
  }

  a {
    color: #0033A1;
    transition: var(--transition);
    font-size: var(--font-size-xs);
    font-weight: 600;
    &:hover {
      color: var(--color-link-hover);
    }
  }
`
