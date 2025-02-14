import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`
export const Button = styled.button`
  border: none;
  background: none;
  color: #878688;
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: var(--transition);

  :hover {
    color: var(--color-primary);
  }
`

export const Divider = styled.div`
  width: 2px;
  background: #878688;
  height: 50%;
  margin: 0 10px;
`
