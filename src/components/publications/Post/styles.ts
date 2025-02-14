import Image from 'next/image'
import styled from 'styled-components'

interface HeaderPublicationProps {
  postType: string
}

const selectColorHeaderPublication = (postType: string) => {
  if (postType === 'announcement') return '#3C9956'
  if (postType === 'survey') return '#E8526E'
  if (postType === 'events') return '#B54BE2'
}

export const PostContainer = styled.div``

export const CardViewPublication = styled.div`
  background: var(--background-container);
  border-radius: var(--border-radius-default);
`
export const TopPublication = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-container);
  align-items: flex-start;
`
export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  :hover p {
    color: var(--color-primary);
  }
`
export const AvatarAuthor = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
`

export const CreationDate = styled.span`
  font-weight: 300;
  font-size: var(--font-size-sm);
  color: #3a393b;
`

export const NameAuthor = styled.p`
  font-size: var(--font-size-md);
  font-weight: 600;
  text-transform: capitalize;
  color: #2c3136;
  transition: var(--transition);
`
export const BtnOptions = styled.button`
  font-size: 1.5rem;
  display: flex;
  height: 100%;
  border: none;
  background: transparent;
  padding: 5px;
  border-radius: 50%;
  transition: var(--transition);

  :hover {
    background: #dfedf9;
    color: var(--color-primary);
  }
`
export const BodyPublication = styled.div``

export const TextBodyPublication = styled.div`
  font-size: var(--font-size-md);
  color: #2c3136;
  padding: var(--padding-container);
  position: relative;

  .text-expanded {
    max-height: none;

    button {
      display: none;
    }
  }
  > div {
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const ImageBodyPublication = styled(Image)`
  object-fit: cover;
  width: 100%;
  max-height: 296px;
  margin-top: 20px;

  cursor: zoom-in;
`

export const BottomPublication = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-container);

  .mainActions {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    font-size: 1.5rem;
  }
  > div {
    display: flex;
  }
`
export const BtnIcon = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;

  border: none;
  background: transparent;
  border-radius: 10px;
  transition: var(--transition);

  span {
    margin-top: 3px;
  }

  :hover {
    color: var(--color-primary);
    background: #dfedf9;
  }
`

export const ItemBodyPopOver = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  transition: var(--transition);
  color: #3a393b;
  font-weight: 500;
  font-size: var(--font-size-sm);
  width: 100%;
  :hover,
  :hover span {
    color: var(--color-primary);
  }
  span {
    transition: var(--transition);
    font-weight: inherit;
    font-size: inherit;
  }
  svg {
    max-width: 24px;
    width: 100%;
    height: 24px;
    padding: 3px;
    font-weight: inherit;
  }
  button {
    border: none;
    background: transparent;
    font-weight: inherit;
    font-size: inherit;
  }
`

export const Divider = styled.div`
  border: 1px solid #c7c6c8;
  margin: 16px 0;
`

export const BtnShowMore = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 0;

  border: none;
  background: transparent;
  font-weight: 600;
  color: var(--color-link);
  transition: var(--transition);
  padding-right: 16px;

  &:hover {
    color: var(--color-link-hover);
  }

  font-size: var(--font-size-xs);
`
export const HeaderPublication = styled.div<HeaderPublicationProps>`
  background-color: ${({ postType }) => selectColorHeaderPublication(postType)};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 32px;
  display: flex;
  align-items: center;
  padding-left: 16px;

  svg {
    color: #ffffff;
    font-size: 0.9688rem;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
    margin-left: 8px;
  }
`

export const PublicationDate = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  color: #3a393b;
`

export const SaveComment = styled.button`
  display: flex;
  justify-content: center;
  margin: 4px 0 0 8px;
  background: #c9e6ff;
  padding: 3px 0;
  border-radius: 10px;
  border: none;
  color: #2793f6;
  transition: var(--transition);
  font-size: var(--font-size-xs);
  font-weight: 600;
  margin-left: 70px;
  width: 100px;
  height: 24px;
  &:hover {
    color: var(--color-link-hover);
  }
`
