import * as dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const Trigger = styled(dialog.Trigger)`
  border: none;
  background: transparent;
`

export const Root = styled(dialog.Root)``
export const Portal = styled(dialog.Portal)``
export const Overlay = styled(dialog.Overlay)`
  background: rgba(0, 0, 0, 0.7);
  inset: 0;
  position: fixed;
  z-index: 1;
  transition: 0.5s;
`
export const Content = styled(dialog.Content)`
  z-index: 999;
  position: fixed;
  max-height: 90vh;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: var(--border-radius-container);
  border-radius: 10px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  > div {
    padding: 0 1rem 1rem;
  }

  @media (max-width: 640px) {
    height: 100%;
    width: 100% !important;
    margin-top: 60px;
    border-radius: 0px;
    max-height: none;
  }
`
export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #3a393b;
  padding: 1rem;
  border-bottom: 1px solid #dddcdf;

  @media (max-width: 640px) {
    font-size: 20px;
    margin-right: 30px;
  }
`
export const Close = styled(dialog.Close)`
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
