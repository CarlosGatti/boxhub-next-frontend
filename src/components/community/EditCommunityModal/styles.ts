import { ModalContent } from '../../_ui/Modal'
import styled from 'styled-components'

export const ButtonInfo = styled.button`
  font-size: var(--font-size-md);
  color: #cc0;
`

export const ContainerTextArea = styled.div`
  width: 100%;
  margin-bottom: 24px;

  p {
    font-size: var(--font-size-sm);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    color: #3a393b;
  }

  textarea {
    width: 100%;
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    line-height: 1.4;
    border: 1px solid #878688;

    &:focus {
      outline: 2px solid #00214A;
    }
  }
`

export const ContainerOption = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-sm);
    color: #3a393b;
    margin-top: 8px;
  }
`
export const ContainerOptionPrivacy = styled.div`
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-sm);
    color: #3a393b;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    margin-bottom: 24px;
  }
`
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #dddcdf;
`

export const ImageContainer = styled.div`
  &:last-child {
    margin-bottom: 24px;
  }
`

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #efefef;
  }

  .profile {
    width: 92px;
    height: 92px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .banner {
    width: 100%;
    height: 104px;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  svg {
    font-size: 40px;
    color: #9c9b9d;
  }
`

export const Caption = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #3a393b;
  margin-bottom: 24px;
  margin-top: 15px;
`

export const ModalBody = styled(ModalContent)`
  width: min(578px, 100%);
  height: 50vh;
  .imagesContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }

  .privacyContainer {
    display: flex;
    flex-direction: column;
  }

  .permissionsContainer {
    display: flex;
    flex-direction: row;
  }
`
