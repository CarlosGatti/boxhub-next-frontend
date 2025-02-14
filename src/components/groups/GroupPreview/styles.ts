import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: min(873px, 100%);
  gap: 1rem;

  @media (max-width: 700px) {
    margin-top: 15px;
  }
`

export const Content = styled.div`
  background-color: var(--background-container);
  border-radius: 10px;
  padding: 16px;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #3a393b;
    margin-bottom: 8px;
  }
`
export const ContentBannerSvg = styled.div`
  background-color: #c1c1c1;
  width: 100%;
  max-height: 24.065rem;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5.6rem;

  svg {
    color: #9c9b9d;
    font-size: 9.188rem;
    margin: 5.625rem;
  }

  @media (max-width: 700px) {
    max-height: 4.065rem;
    padding: 2.625rem;

    svg {
      font-size: 4.188rem;
    }
  }
`
export const GroupInformation = styled.div`
  margin-top: calc(0px - 2.5rem - 6px);
  margin-left: 16px;
`

export const ContentImgGrupo = styled.div`
  background-color: #d9d9d9;
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 90px;
  border: 8px solid var(--background-container);
  box-sizing: border-box;
  margin-bottom: -100px;

  svg {
    color: #9c9b9d;
    font-size: 71px;
  }

  img {
    border-radius: 50%;
    padding: 5px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    border: 4px solid #ffffff;
    width: 80px;
    height: 80px;

    svg {
      font-size: 20px;
    }
  }
`

export const GroupDetails = styled.div`
  margin-top: 3.438rem;
  margin-left: 16px;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    color: #3a393b;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.125rem;
    }
  }
`

export const GroupParticipants = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-sm);
    line-height: 21px;
    color: #3a393b;
  }

  h1:nth-child(2) {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-sm);
    line-height: 21px;
    color: #3a393b;
  }

  @media (min-width: 700px) {
    h1 + h1::before {
      content: '|';
      margin: 0 8px;
    }
  }
`

export const AdminInformation = styled.div`
  display: flex;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-sm);
    color: #5a5a5a;
    margin-left: 8px;
  }
`
export const ContainerButton = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  margin-top: 40px;

  div {
    max-width: 475px;
    width: 100%;
  }
`

export const Information = styled.div`
  display: flex;
`
export const ImgBanner = styled.div`
  width: 100%;
  max-width: 841px;
  height: 385px;
  display: flex;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`
export const ContentBannerImg = styled.div`
  background-color: #c1c1c1;
  width: 100%;
  max-height: 24.065rem;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 700px) {
    max-height: 4.065rem;
    margin: 40px 0;

    svg {
      font-size: 4.188rem;
    }
  }
`
