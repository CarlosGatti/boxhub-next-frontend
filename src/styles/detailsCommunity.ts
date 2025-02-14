import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const Content = styled.div`
  width: 100%;
  background-color: var(--background-container);
  border-radius: 10px;

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
  padding: 5.625rem;

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
  margin-bottom: 21px;
  margin-left: 16px;
`

export const ContentImgGrupo = styled.div`
  background-color: #d9d9d9;
  width: 160px;
  height: 160px;
  margin-top: -46px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 90px;
  border: 8px solid var(--background-container);
  box-sizing: border-box;

  svg {
    color: #9c9b9d;
    font-size: 71px;
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;

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
export const WrapperActions = styled.div`
  margin-top: 1.5rem;
  margin-right: 1rem;
  justify-content: end;
  display: flex;
  gap: 10px;

  div {
    width: auto;
  }
  button {
    width: 100%;
  }
`
export const GroupDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
  margin-left: 16px;

  h3 {
    font-weight: 600;
    font-size: var(--font-size-6xl);
    line-height: 1;
    color: #3a393b;
  }

  @media (max-width: 700px) {
    h3 {
      font-size: 1.125rem;
    }
  }
`

export const GroupParticipants = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: var(--font-size-sm);
    line-height: 21px;
    color: #3a393b;
    border-right: solid 1px #3a393b;
    margin-right: 5px;
    padding-right: 5px;
  }

  span:nth-child(2) {
    font-style: normal;
    font-weight: 600;
    font-size: var(--font-size-sm);
    line-height: 21px;
    color: #3a393b;
  }
  @media (min-width: 700px) {
    display: flex;
  }
`

export const AdminInformation = styled.div`
  display: flex;
  padding-top: 8px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-sm);
    color: #5a5a5a;
    margin-left: 8px;
  }
`
export const SidebarAbout = styled.div`
  background-color: #ffffff;
  padding: 20px;

  height: fit-content;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;

  .title {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`
export const ContainerAboutGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  .rules {
    > p {
      margin-bottom: 10px;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }

  .subtitle {
    font-weight: bold;
    font-size: 14px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #3a393b;
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
export const ContentButton = styled.div`
  background-color: #f4f3f6;
  border-radius: 4px;
  margin-top: 40px;

  button:nth-child(1) {
    margin-right: 2px;
  }

  button:disabled {
    background: #f4f3f6;
    color: #878688;
  }
`

export const Information = styled.div`
  display: flex;
  > div {
    display: flex;
    flex-grow: 1;
  }
`
export const ImgBanner = styled.div`
  width: 100%;
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
export const Wrapper = styled.div`
  display: flex;
  gap: 16px;

  .feed {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 780px;
    width: 100%;

    @media (max-width: 1100px) {
      max-width: 100%;
    }
  }
`
export const WrapperListMembers = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;

  width: 100%;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  gap: 1rem;
`
