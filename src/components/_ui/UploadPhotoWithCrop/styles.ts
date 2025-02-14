import NextImage from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 15px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  gap: 2px;
  width: 100%;
  height: 100%;
  input[type='file'] {
    display: none;
  }
  cursor: pointer;
  font-size: var(--font-size-sm);

  img {
    object-fit: cover;
  }
`
export const WrapperImage = styled.div`
  height: 100%;
`
export const IconCamera = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -10px;
  bottom: 50px;
  background: var(--color-primary);
  color: #fff;
  padding: 7px;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: var(--box-shadow-container);
`

export const Image = styled(NextImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
export const WrapperButton = styled.div`
  display: flex;

  gap: 15px;
`
export const Button = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    color: var(--color-link-hover);
  }
`
