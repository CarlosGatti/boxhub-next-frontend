import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
`

export const Title = styled.h3`
  color: #2c3136;
  font-weight: 600;
  font-size: var(--font-size-2xl);
  margin-bottom: 0.5rem;
`
