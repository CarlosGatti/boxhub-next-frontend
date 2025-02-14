import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .primary {
    background: #191919;
    color: #fff;
  }
  .secondary {
    background: #fff;
    border: 1px solid #2c3136;
  }
  .tertiary {
    background: #f4f3f6;
    border: 1px solid #2c3136;
  }
`
export const ButtonSubmit = styled.button`
  width: 100%;

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  .children {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;

    white-space: nowrap;
  }

  height: 42px;
  min-width: 42px;

  font-weight: 600;
  font-size: var(--font-size-sm);

  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radius-default);

  transition: var(--transition);

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  :disabled {
    color: #000;
    background: #dddcdf;
    box-shadow: none;
  }
`
export const Loading = styled.div``
