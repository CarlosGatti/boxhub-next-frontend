import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: min(578px, 100%);
  gap: 1rem;

  .publicationsContent {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 640px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`
export const ButtonCreatePublication = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);

  button {
    display: flex;
    border: none;
    width: 100%;
    padding: var(--padding-container);
    border-radius: inherit;
    background: #f4f3f6;
    font-size: 1.312rem;
    color: #878688;
    transition: var(--transition);

    @media (max-width: 640px) {
      font-size: 1rem;
    }

    :hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  }
`
