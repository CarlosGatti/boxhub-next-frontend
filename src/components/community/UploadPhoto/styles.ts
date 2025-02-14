import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 15px;
`
export const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  svg {
    font-size: 3rem;
    color: #3a393b;
  }
  &:hover svg {
    color: var(--color-primary);
  }
`
export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.5rem;

  img {
    width: 100%;
  }

  p {
    overflow: hidden;
    max-width: 16rem;
    text-overflow: ellipsis;
  }

  button {
    display: flex;
    font-size: 1.3rem;
    border: none;
    background: transparent;
    padding: 0.5rem;

    &:hover svg {
      color: var(--color-primary);
    }
  }
`
export const WrapperNotesSent = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`

export const TitleNotesSent = styled.p`
  font-size: var(--font-size-md);
  font-weight: 600;
`
export const NoteSent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 1rem 0.5rem;

  :not(:last-child) {
    border-bottom: 1px solid #c7c6c8;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
export const IconNFe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #878688;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  font-weight: 600;
`
export const InfoNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    line-height: 1rem;
    font-weight: 600;
  }
  span {
    line-height: 1rem;
  }
`
