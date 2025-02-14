import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 50%;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to right, #0033A1, #2595be71) border-box;

  padding: 2px;

  border-radius: 50em;
  border: 3px solid transparent;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  line-height: 16px;
  strong {
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #5a5a5a;
    transition: var(--transition);
  }
  span {
    font-weight: 500;
    color: #9c9b9d;
    font-size: var(--font-size-sm);
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;

  &:hover {
    strong {
      color: var(--color-link-hover);
    }
  }
`
