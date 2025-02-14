import { ButtonOpenModal, ModalContent } from '../../../../components/_ui/Modal'

import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 5px; 
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Group = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 0;
  }
`
export const CategoryItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 1rem;

  padding: 1rem 1rem;

  :not(:last-child) {
    border-bottom: 1px solid #c7c6c8;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: align-items;
  justify-content: center;
  p {
    line-height: 1rem;
    font-weight: 600;
  }
  span {
    line-height: 1rem;
  }
`


export const ModalBody = styled(ModalContent)`
  width: min(578px, 100%);
`


