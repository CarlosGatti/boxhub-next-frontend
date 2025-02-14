import { ButtonOpenModal, ModalContent } from '../../../../components/_ui/Modal'

import styled from 'styled-components'

export const ModalBody = styled(ModalContent)`
  width: min(578px, 100%);
  height: 50vh;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  margin-bottom: 20px;
`

interface CardProps {
  selected: boolean
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.selected ? 'var(--color-primary)' : 'transparent'};
  color: ${(props) => (props.selected ? '#ffffff' : 'var(--color-primary)')};
  border: ${(props) =>
    props.selected ? 'none' : '1px solid var(--color-primary)'};
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonModal = styled(ButtonOpenModal)`
  background: #fff;
  border: 1px solid #2c3136;

  padding: 8px 15px;
  border-radius: var(--border-radius-default);
  font-size: var(--font-size-sm);
  min-height: 42px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  font-weight: 600;
  max-width: 312px;
  width: 100%;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`
export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 1rem;

  span {
    text-align: center;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    width: 100%;

    span {
      margin-top: 20px;
    }
  }
`

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 5px;

  overflow-y: auto;
  max-height: 230px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
`
export const ResultName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #3a393b;
  transition: var(--transition);

  &:hover {
    color: var(--color-primary);
  }
`

export const ResultUser = styled.span`
  font-size: 10px;
`
export const ResultCommunity = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-primary);
`
