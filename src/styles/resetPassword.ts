import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`
export const WrapperForm = styled.div`
  background: #fff;
  max-width: 528px;
  min-height: 508px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-container);
  padding: 24px;
  box-shadow: var(--box-shadow-container);
`
export const Form = styled.form`
  width: 100%;
  max-width: 348px;
  padding: 5px;
`
export const Title = styled.h1`
  text-align: center;
  color: #2c3136;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 30px;
`
export const Description = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #878688;
  margin-bottom: 20px;
`
