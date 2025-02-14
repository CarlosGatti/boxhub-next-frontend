import { SideBar } from '../components/_ui/SideBar'
import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 24px;
  padding: 40px 20px;

  @media (min-width: 700px) {
    display: flex;
  }
`
export const ContainerTextArea = styled.div`
  width: 100%;
  margin-bottom: 24px;

  p {
    font-size: var(--font-size-sm);
  }

  textarea {
    width: 100%;
    background: var(--gray-900);
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
  max-width: 281px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-sm);
    color: #3a393b;
    margin-top: 8px;
  }
`
export const ContainerOptionPrivacy = styled.div`
  h1 {
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
export const ContainerAddPhoto = styled.div`
  width: 100%;
  margin-bottom: 24px;
  div {
    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: var(--font-size-sm);
      color: #494950;
      margin-bottom: 5px;
      margin-top: 16px;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: var(--font-size-sm);
      color: #494950;
      margin-bottom: 8px;
    }
  }
`

export const AddPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 92px;
    height: 92px;
    background-color: #efefef;
    border-radius: 90px;
    border: 1px dashed #c1c1c1;
  }

  svg {
    font-size: 40px;
    color: #9c9b9d;
  }
`
export const ContainerCover = styled.div`
  margin-bottom: 24px;
  width: 100%;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #3a393b;
    margin-bottom: 24px;
  }

  div {
    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: var(--font-size-sm);
      color: #494950;
      margin-bottom: 5px;
      margin-top: 16px;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: var(--font-size-sm);
      color: #494950;
      margin-bottom: 8px;
    }
  }
`

export const AddCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 122px;
    background-color: #efefef;
    border-radius: 8px;
    border: 1px dashed #c1c1c1;
  }

  svg {
    font-size: 40px;
    color: #9c9b9d;
  }
`
export const WrapperAttach = styled.div`
  width: 100%;
`
export const ButtonCreatePublication = styled.div`
  background: var(--background-container);
  border-radius: 10px;
  padding: 16px;
  height: 96px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    margin-left: 12px;
  }

  button {
    display: flex;
    border: none;
    width: 100%;
    padding: var(--padding-container);
    border-radius: inherit;
    background: #f4f3f6;
    font-size: var(--font-size-xs);
    color: #878688;
    text-align: start;
    transition: var(--transition);

    :hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }

    @media (min-width: 700px) {
      font-size: var(--font-size-sm);
    }
  }
`
export const GroupView = styled.div`
  margin-top: 16px;

  @media (min-width: 700px) {
    justify-content: space-between;
    display: flex;
  }
`
export const Caption = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #3a393b;
  margin-bottom: 24px;
  margin-top: 15px;
`
export const ContainerAboutGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 700px) {
    max-width: 210px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #3a393b;
  }
`
export const SideBarCreateGroup = styled(SideBar)`
  width: 100%;

  @media (min-width: 700px) {
    width: min(281px, 100%);
  }
`
