import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: min(265px, 100%);
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const WrapperIdentityOwner = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  position: sticky;
  top: 77px;
`
export const GroupsOwner = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  max-height: 265px;
  overflow: auto;
`
export const ContactsOwner = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
`

export const Title = styled.div`
  font-weight: 600;
  color: #2c3136;
  font-size: var(--font-size-2xl);
  margin-bottom: 0.5rem;
`

export const Card = styled.button`
  display: flex;
  width: 100%;
  gap: 16px;
  border: none;
  background: transparent;
  padding: 11px 0;
  border-radius: var(--border-radius-default);
  cursor: pointer;

  strong,
  span {
    transition: var(--transition);
  }

  &:hover {
    strong,
    span {
      color: var(--color-link-hover);
    }
  }
`
export const Avatar = styled(Image)`
  position: relative;
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`
export const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  line-height: 18px;
  transition: var(--transition);
  strong {
    font-weight: 500;
    font-size: var(--font-size-md);
    color: #3a393b;
  }
  span {
    font-weight: 400;
    color: #9c9b9d;
    font-size: var(--font-size-sm);
  }
`
export const Empty = styled.div`
  p {
    margin-bottom: 1rem;
  }
`
