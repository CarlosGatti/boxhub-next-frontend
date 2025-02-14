import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`
export const HeaderSimpleWrapper = styled.div`
margin-top: 35px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  align-items: center;
  align-content: center;
  height: 100%;
`
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 1;
  background: #191919;
  height: 60px;
  padding: 0 16px;
`
export const WrapperForm = styled.div`
  background: #fff;
  max-width: 528px;
  min-height: 508px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-default);
  padding: 24px;
  box-shadow: var(--box-shadow-container);
`
export const WrapperStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 380px;
  width: 100%;

  a {
    display: flex;
    justify-content: center;
  }
`
export const Form = styled.form`
  width: 100%;
  max-width: 348px;
  padding-top: 20px;
  margin: 0 auto;
`
export const Title = styled.h1`
  text-align: center;
  color: #2c3136;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 20px;
`
export const Description = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #878688;
  margin-bottom: 20px;
`
export const TwoColumn = styled.div`
  display: flex;
  gap: 5px;
`

export const ServiceTerms = styled.div`
  color: #878688;
  font-size: var(--font-size-xs);
  text-align: center;
  padding-bottom: 40px;

  strong {
    transition: var(--transition);
  }

  strong:hover {
    color: var(--color-primary);
  }
`
export const Back = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 28px;
  color: #191919;
  transition: 0.3s;
  width: 100%;
  font-weight: 600;
  font-size: var(--font-size-xs);

  &:hover {
    color: var(--color-link-hover);
  }
`
export const ImageUploadPhoto = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 64px;

  img {
    border-radius: 50%;
  }
`
