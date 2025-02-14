import styled from 'styled-components'

export const Form = styled.form`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 265px;
  height: min-content;

  h1 {
    text-align: center;
    padding: 20px;
  }
`
export const TitleForm = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0.5rem;

  font-weight: 600;
  font-size: var(--font-size-sm);
  line-height: 21px;
  color: #2c3136;
`
export const DescriptionForm = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: var(--font-size-xs);
  line-height: 18px;
  text-align: center;
  color: #9c9b9d;
`

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -5px;
  margin-bottom: 24px;
  color: #2793f6;
  transition: var(--transition);
  font-size: var(--font-size-xs);
  font-weight: 600;

  &:hover {
    color: var(--color-link-hover);
  }
`
