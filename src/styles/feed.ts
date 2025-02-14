import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 40px 16px 40px 16px;

  @media (max-width: 640px) {
    padding: 0;
  }
`
export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column;
  width: min(578px, 100%);
  gap: 1rem;
`
export const WrapperSinglePost = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  gap: 24px;
  padding-top: 40px;
  padding-bottom: 40px;
`
