import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 16px 16px 24px 16px;
`

export const InfoAuthor = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Avatar = styled(Image)`
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
  width: 100%;
  margin-top: 16px;
`
export const Textarea = styled.input`
  width: 100%;
  max-width: 546px;
  border: none;
  font-weight: 500;
  font-size: 1.3125rem;
  color: #3a393b;
  outline: none;
  height: 32px;

  ::placeholder {
    font-weight: 400;
    font-size: 1.3125rem;
    color: #878688;
  }
`

export const ContainerOptions = styled.div`
  padding-top: 16px;
  margin-top: 5px;
  border-top: 1px solid #c7c6c8;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-right: 32px;
`

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #3a393b;
  border-radius: 8px;
  justify-content: center;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #3a393b;
  }

  svg {
    font-size: 1.5rem;
  }

  :hover {
    background-color: #f2f2f2;
  }
`

export const AddOptionButton = styled(Button)`
  padding: 9px;
  width: 65%;
`
export const PreferenceButton = styled(Button)`
  padding: 9px;
  width: 33%;
`
