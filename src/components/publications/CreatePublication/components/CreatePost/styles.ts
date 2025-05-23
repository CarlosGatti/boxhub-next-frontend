import NextImage from 'next/image'
import styled from 'styled-components'

export const Avatar = styled(NextImage)`
  position: relative;
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
`
export const Name = styled.span`
  font-weight: 600;
  font-size: var(--font-size-md);
  color: #2c3136;
`
export const WrapperTextarea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
`

export const Image = styled(NextImage)`
  /*  max-width: ${(props) => (props.width ? '100%' : '150px')}; */
  object-fit: cover;
`
export const WrapperPreview = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    max-width: 570px;
  }
`

export const AddToPublication = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  margin-bottom: 1rem;

  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: var(--font-size-md);
  color: #2c3136;

  div {
    display: flex;
    gap: 1rem;
  }
`

export const Container = styled.div`
  width: 100%;
`

export const InfoAuthor = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1rem;
`

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 546px;
  border: none;
  font-weight: 500;
  font-size: var(--font-size-sm);
  color: #3a393b;
  outline: none;
  min-height: 92px;

  ::placeholder {
    font-weight: 400;
    font-size: var(--font-size-sm);
    color: #878688;
  }
`
export const EmojiButton = styled.button`
  float: right;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  border: none;
  background: transparent;
  color: #3a393b;
  font-size: 30px;
  transition: var(--transition);
  &:hover,
  &.active {
    color: var(--color-primary);
  }
`
export const WrapperAttach = styled.div`
  padding: var(--padding-container);
  width: 100%;
`
export const WrapperAddAttach = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7c6c8;
  height: 102px;
  margin-bottom: 1rem;
  border-radius: var(--border-radius-default);
  cursor: pointer;
  transition: var(--transition);

  svg {
    font-size: 21px;
  }

  &:hover {
    color: var(--color-primary);
  }
`

export const WrapperThumbNinePreview = styled.div`
  position: relative;

  button {
    color: transparent;
    padding: 10px;
    border: none;
    background: transparent;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--font-size-md);
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      font-size: 30px;
    }

    :hover {
      color: var(--color-primary) !important;
    }
  }
  :hover button {
    color: #fff;
  }

  img {
    transition: var(--transition);
  }

  :hover img {
    filter: brightness(24%);
  }
`

export const InsertButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: #3a393b;
  font-size: 30px;
  transition: var(--transition);
  &:hover {
    color: var(--color-primary);
  }
`
