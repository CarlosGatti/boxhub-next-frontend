import styled from 'styled-components'

export const WrapperBtn = styled.div`
  display: flex;
  .secondary {
    padding: 5px;
    border: none;
    border-radius: 50%;
    transform: rotate(90deg);

    :hover {
      color: var(--color-primary);
      background: #dfedf9;
    }
  }
  .primary {
    padding: 3px 4px;
    border: 1px solid #000;
    border-radius: 8px;

    :hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
`
export const BtnOptions = styled.button`
  background: #fff;
  display: flex;
  font-size: 1.5rem;
  transition: var(--transition);

  :hover {
    color: var(--color-primary);
  }
`
