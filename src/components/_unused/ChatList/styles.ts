import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 997;
  right: 24px;
  margin-top: 6.9rem;
  top: 1px;

  background: var(--background);
  box-shadow: -2px -2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
`

export const Header = styled.header`
  display: flex;
  padding: 16px;
  gap: 206px;

  button {
    border: 0;
    background-color: #d9d9d9;
    border-radius: 50px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: var(--font-size-xxs);

    svg {
      color: #3a393b;
      font-size: var(--font-size-md);
    }
  }

  button:hover {
    background-color: #b3b3b3;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: var(--text-color-primary);
  }
`

export const ContainerMessage = styled.button`
  border: 0;
  overflow: 0;
  background-color: transparent;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  padding: 8px;
  border-radius: 8px;

  :hover {
    background-color: #dfdfdf;
  }
`

export const Message = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    line-height: 24px;
    color: #2c3136;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-xs);
    line-height: 18px;
    color: #b1b0b2;
  }
`

export const ContainerMessageInformation = styled.div`
  text-align: end;
`

export const MessageInformation = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-xs);
    color: #6d6d78;
  }
`
export const PendingMessage = styled.p`
  background-color: var(--color-primary);
  text-align: center;
  border-radius: 4px;
  padding: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: var(--font-size-sm);
  color: #ffffff;
  margin-top: 2px;
`
