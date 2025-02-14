import styled from 'styled-components'

interface ButtonPostTypeProps {
  select: boolean
  backgroundColor: string
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Cancel = styled.button`
  display: flex;
  padding: 5px;
  border-radius: 50%;
  border: none;
  background: transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  transition: var(--transition);

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`
export const HeaderCreatePublication = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
  border-bottom: 1px solid #c7c6c8;
  align-items: center;

  h1 {
    display: flex;
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #2c3136;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`
export const ButtonPostType = styled.button<ButtonPostTypeProps>`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  border-radius: 10px;
  margin-left: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: var(--transition);

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
    margin-left: 8px;
    display: ${({ select }) => (select ? 'block' : 'none')};
  }

  svg {
    color: #ffffff;
    font-size: 15.65px;
  }

  :hover {
    opacity: 0.7;
  }
`
