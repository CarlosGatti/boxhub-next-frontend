import styled from 'styled-components'
import * as dialog from '@radix-ui/react-tooltip'

export const Provider = styled(dialog.Provider)``
export const Root = styled(dialog.Root)``

export const Portal = styled(dialog.Portal)``
export const Content = styled(dialog.Content)`
  background: #fff;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container);
  margin: 5px;
`
export const Trigger = styled(dialog.Trigger)`
  border: none;
  background: transparent;
`

export const Arrow = styled(dialog.Arrow)``
