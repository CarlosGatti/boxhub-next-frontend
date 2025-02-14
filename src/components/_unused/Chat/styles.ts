import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 32px;
  bottom: 0px;
  margin-bottom: 0;
  z-index: 997;
  right: 24px;

  background: var(--background);
  box-shadow: -2px -2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 0px;
`

export const Header = styled.header`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  gap: 70px;

  button {
    border: 0;
    background-color: var(--color-danger);
    border-radius: 50px;
    padding: 0;
    width: 24px;
    height: 24px;

    font-size: var(--font-size-xxs);
    font-style: bold;
  }

  button:hover {
    background-color: #f9909b;
  }
`
export const UserInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: var(--text-color-primary);
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-xs);
    color: #b1b0b2;
  }
`
export const Footer = styled.footer`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;

  button {
    border: 0;
    outline: 0;
  }
`
