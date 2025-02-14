import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
`
export const WrapperCard = styled.div`
  position: relative;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  max-width: 161px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-container);
  height: 241px;
`
export const Avatar = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
`
export const Name = styled.span`
  text-align: center;
  font-size: var(--font-size-md);
  font-weight: 600;
  color: #3a393b;
  line-height: 18px;
`
export const Info = styled.span`
  text-align: center;
  font-size: var(--font-size-xs);
  color: #878688;
  margin-bottom: 10px;
  font-style: italic;
`
export const BtnClose = styled.button`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: transparent;
  padding: 3px;
  font-size: 1.3rem;
  transition: var(--transition);
  &:hover {
    color: var(--color-primary);
  }
`
