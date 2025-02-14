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

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #2c3136;
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const Header = styled.header`
  padding: 16px;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #878688;
    padding-left: 16px;
    margin-top: 8px;
  }
`
export const Title = styled.div`
  display: flex;
  gap: 165px;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #2c3136;
  }

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
export const Contact = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  border: 0;
  overflow: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-md);
    color: #3a393b;
  }

  :hover {
    background-color: #dfdfdf;
  }
`
