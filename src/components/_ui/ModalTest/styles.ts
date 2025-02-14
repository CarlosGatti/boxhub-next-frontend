import styled from 'styled-components'

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`

export const Container = styled.div`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0 0.9);
  transition: 0.3s ease-in-out;

  &.active {
    opacity: 1;
    background: #000000cf;

    visibility: visible;
  }

  .content {
    position: fixed;
    max-height: 90vh;
    z-index: 1;
    overflow: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: var(--border-radius-container);
    border-radius: 10px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    @media (max-width: 640px) {
      width: 90vw;
    }
  }

  &.active .content {
    opacity: 1;
    visibility: visible;
  }

  .footer {
    padding: 16px 20px;
    display: flex;
    justify-content: end;
    gap: 1rem;
  }

  .close {
    position: absolute;
    top: 16px;
    right: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #7f7f7f;

    &:hover {
      color: #000;
    }
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #3a393b;
  padding: 1rem;
  border-bottom: 1px solid #dddcdf;
`
export const Content = styled.div`
  padding: 1rem;
  padding-top: 1rem;
`

export const Close = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-items: center;
  transition: var(--transition);
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`
