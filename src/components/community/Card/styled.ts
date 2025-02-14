import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
  }

  background: #fff;
  width: 380px;
  border-radius: 10px;
  padding-bottom: 1.5rem;
  transition: var(--transition);

  :hover {
    box-shadow: var(--box-shadow-container);
  }

  > div {
    padding: 0 1rem;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageCover = styled(Image)`
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`
export const ImagePicture = styled(Image)`
  border: 8px solid var(--background-container);
  margin-top: -91px;
  border-radius: 50%;
  object-fit: cover;
`
export const Title = styled.div`
  font-weight: 600;
  font-size: var(--font-size-xl);
  line-height: 30px;
  color: #2c3136;
  margin-top: 0.5rem;
`
export const Info = styled.div`
  font-weight: 400;
  font-size: var(--font-size-md);
  line-height: 24px;
  color: #9c9b9d;
  margin-bottom: auto;

  span {
    margin-bottom: auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 48px;
  }
`
