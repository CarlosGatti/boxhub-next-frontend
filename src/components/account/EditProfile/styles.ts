import { ButtonOpenModal, ModalContent } from '../../../components/_ui/Modal'

import styled from 'styled-components'

export const ModalBody = styled(ModalContent)`
  width: min(578px, 100%);
`

export const Form = styled.form`
  /*  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 348px;
  padding: 5px; */
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

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 0;
  }
`
export const GroupCheckbox = styled.div`
  margin-bottom: 1rem;
`

export const ImageUploadPhotoWithCrop = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
`
