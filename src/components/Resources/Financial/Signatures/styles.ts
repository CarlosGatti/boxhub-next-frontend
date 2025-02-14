import { ButtonOpenModal, ModalContent } from '../../../../components/_ui/Modal'

import NextImage from 'next/image'
import styled from 'styled-components'

export const WrapperSignatures = styled.div`
  width: 100%;
  margin-top: 1rem;
`

export const Signature = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem 0rem;

  :not(:last-child) {
    border-bottom: 1px solid #c7c6c8;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3a393b;
`

export const Image = styled(NextImage)`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #3a393b;
  }
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #878688;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    /* identical to box height */

    color: #3a393b;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 5px; 
`

export const Group = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 0.5 drem;
  width: 100%;
  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 0;
  }
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  span {
    text-align: center;
  }


  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    width: 100%;

    span {
      margin-top: 20px;
    }
  }
`


export const ImageUploadPhotoWithCrop = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
`

export const WrapperDateHour = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  align-items: end;

  @media (max-width: 640px) {
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
`


export const ModalBody = styled(ModalContent)`
  width: min(578px, 100%);
`

export const ListSubscriptionsPlans = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100%; 
  background: #f9f9f9;
  padding: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
`

