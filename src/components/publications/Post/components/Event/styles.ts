import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f6f5f5;
  border-radius: 10px;
  margin: 0px 8px;
  padding-bottom: 32px;
`
export const Banner = styled(Image)`
  max-height: 124.29px;
  width: 100%;

  display: flex;
`

export const BannerContainer = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }

  .image {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

export const ContainerDate = styled.div`
  background-color: #f6f5f5;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  height: 64px;
  width: 64px;
  position: relative;
  margin-top: calc(0px - 1.5rem - 6px);
  margin-left: 16px;
  align-items: center;
  justify-content: center;
  display: flex;

  p:first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: #212121;
    text-align: center;
    line-height: 20px;
    margin-top: 10px;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #212121;
    text-align: center;
    line-height: 30px;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #212121;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #2c3136;
`
export const ContainerInfoEvent = styled.div`
  margin: 16px;

  div {
    justify-content: end;
    display: flex;
  }
`
export const SeeEventButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  text-decoration-line: underline;
  color: #2793f7;
`
