import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

interface WrapperCommentProps {
  textComment: boolean
}

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const Avatar = styled(Image)`
  max-width: 48px;
  max-height: 48px;
  object-fit: cover;
  border-radius: 50%;
`
export const Wrapper = styled.div`
  width: 100%;
`
export const WrapperComment = styled.div<WrapperCommentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.textComment ? '#dfedf9' : '#f2f9ff')};

  border-radius: 10px;
  padding: 0.5rem;
  transition: var(--transition);
  width: 100%;

  > div {
    width: 100%;
  }

  :hover {
    background: #dfedf9;
  }
`
export const Name = styled.span`
  font-weight: 500;
  font-size: var(--font-size-sm);
  line-height: 1.5rem;
  color: #3a393b;
  transition: var(--transition);
`
export const CommentTextarea = styled.textarea`
  font-weight: 300;
  width: 100%;
  font-size: var(--font-size-sm);
  line-height: 18px;
  color: #3a393b;
  resize: none;
  border: none;
  background: transparent;

  outline: none !important;
  /* border: 1px solid #424242; */
`

export const WrapperAction = styled.div`
  display: flex;
  padding-left: 3px;
  gap: 0.5rem;
`
export const BtnIcon = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: transparent;
  transition: var(--transition);
  padding: 5px;
  font-size: var(--font-size-lg);

  :hover {
    color: var(--color-primary);
  }

  /*  .trash:hover {
    color: var(--color-danger);
  } */
`
export const Info = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  :hover span {
    color: var(--color-primary);
  }
`
export const CreationDate = styled.p`
  font-weight: 300;
  font-size: var(--font-size-xs);
  color: #3a393b;
  position: relative;
  :before {
    content: '';
    width: 2px;
    height: 2px;
    background: #3a393b;
    position: absolute;
    top: 8px;
    left: -7px;
    border-radius: 50%;
  }
`
