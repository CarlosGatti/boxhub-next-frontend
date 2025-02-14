import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div``

export const Connection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: var(--transition);

  .pendingMember {
    color: rgba(251, 192, 30, 1);
    margin-left: 10px;
    font-size: 12px;
    margin-right: auto;
  }

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const Avatar = styled(Image)`
  min-width: 64px;
  object-fit: cover;
  border-radius: 50%;
`
export const Name = styled.span`
  font-size: var(--font-size-md);
  cursor: pointer;
  font-weight: 600;
  color: #3a393b;
  line-height: 18px;
  transition: var(--transition);
  :hover {
    color: var(--color-primary);
  }
`
