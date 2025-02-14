import styled from 'styled-components'

export const WrapperFormOfPayment = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 1.5rem 1.5rem;
  background: #f4f3f6;
  border-radius: var(--border-radius-default);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  margin-top: 1.5rem;
`

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 3rem;
`

export const DataPayment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: 600;
    font-size: var(--font-size-md);
    color: #555555;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 7.5rem;
      fill: red;
    }
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const TrashButton = styled.button`
  display: flex;
  align-items: right;
  border: none;
  background: transparent;
  color: #dd2626;
  padding: 1rem;

  > svg {
    transition: var(--transition);
    font-size: 1.5rem;
  }
  :hover {
    color: #940b01;
  }
`

export const ViewButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: #00214A;
  padding: 1rem;

  > svg {
    transition: var(--transition);
    font-size: 1.5rem;
  }
  :hover {
    color: #D2DFE6;
  }
`
