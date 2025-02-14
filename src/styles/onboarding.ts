import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  padding: 0 1rem;
`
export const WrapperCard = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #2c3136;
  }
  span {
    font-weight: 400;
    font-size: var(--font-size-2xl);
    line-height: 36px;
    text-align: center;
    color: #878688;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    h1 {
      font-size: var(--font-size-6xl);
      line-height: 50px;
    }
    span {
      font-size: var(--font-size-lg);
      line-height: 16px;
    }
  }
`
export const Card = styled.div`
  max-width: 380px;
  width: 100%;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  transition: var(--transition);
  cursor: pointer;
  :hover {
    box-shadow: var(--box-shadow-container);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ImageCard = styled.div`
  border-radius: 8px 8px 0 0;
  background: #193565;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  img {
    width: 100% !important;
  }
`
export const TitleCard = styled.div`
  padding: 1rem;
  h3 {
    font-weight: 600;
    font-size: var(--font-size-xl);
    line-height: 30px;
    color: #2c3136;
  }

  span {
    font-weight: 400;
    font-size: var(--font-size-md);
    line-height: 24px;
    color: #878688;
  }
`
