import NextImage from 'next/image'
import styled from 'styled-components'

interface multiplesThumNineProps {
  multiplesThumNine: boolean
}

export const Container = styled.div`
  width: 100%;
`

export const Form = styled.form`
  padding: var(--padding-container);
  width: 100%;
`
export const WrapperAddAttach = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    color: var(--color-primary);
  }
`

export const WrapperGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  justify-content: space-between;
  /*  flex: 1fr 1fr; */

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
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
export const Image = styled(NextImage)`
  width: 227px;
  height: 131px;
  border-radius: 10px;
  object-fit: cover;
`
export const WrapperPreview = styled.div<multiplesThumNineProps>`
  width: 227px;
  height: 131px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`

export const WrapperThumbNinePreview = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 80%;
    left: 90%;
    transform: translate(-50%, -50%);
  }

  img {
    transition: var(--transition);
  }

  :hover img {
    filter: brightness(24%);
  }
`

export const EventImage = styled.div`
  width: 227px;
  height: 131px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`
export const AddImageButton = styled.button`
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  border-radius: 50px;
  background-color: #00214A;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 19px;
    color: #ffffff;
  }
`

export const ContainerEventImage = styled.div`
  justify-content: center;
  display: flex;
`

export const WrapperBanner = styled.div`
  width: 100%;
`

export const TitleEventImage = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  width: 100%;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #3a393b;
  }

  button {
    border: 0;
    outline: 0;
    background: transparent;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #2793f6;
  }
`
export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;
  margin-bottom: 24px;
  margin-top: 20px;
`
export const ContainerInfoEvent = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  /*  div {
    width: 100%;
  } */
`
