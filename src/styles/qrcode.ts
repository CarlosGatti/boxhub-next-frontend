import { SideBar } from '../components/_ui/SideBar'
import styled from 'styled-components';

export const Container = styled.div``

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2c3136;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`

export const SideBarLeft = styled(SideBar)`
  width: min(281px, 100%);

  @media (max-width: 1092px) {
    width: 100%;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: min(578px, 100%);
  gap: 1rem;
`

export const ImageCrop = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
`


export const WrapperBody = styled.div`
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
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  width: 100%;
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  gap: 1rem;
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
