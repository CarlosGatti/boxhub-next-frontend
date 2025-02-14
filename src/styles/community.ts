import { SideBar } from '../components/_ui/SideBar'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1190px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

export const SideBarLeft = styled(SideBar)`
  max-width: 380px;
  width: 100%;

  .communityContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;

    padding-right: 20px;

    overflow-y: auto;

    max-height: 240px;
  }

  @media (max-width: 1092px) {
    /*   width: 100%;
    max-width: none; */
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: var(--font-size-xl);
  line-height: 30px;
  padding-top: 1rem;

  color: #2c3136;
`
export const Description = styled.span`
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: #9c9b9d;
`

export const WrapperBody = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 800px) {
    align-items: center;
  }
`

export const WrapperViewCommunities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`

export const SubTitle = styled.h4`
  font-weight: 600;
  font-size: var(--font-size-md);
  line-height: 16px;
  color: #3a393b;
  margin-bottom: 0.5rem;
`

export const NoCommunity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0.5rem;
  color: #9c9b9d;
  text-align: center;
`
