import * as Popover from '@radix-ui/react-popover'

import styled from 'styled-components'

export const Root = styled(Popover.Root)``
export const Portal = styled(Popover.Portal)``

export const Content = styled(Popover.Content)`
  background: #fff;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-default);
  padding: 10px;
  margin: 5px;
`
export const Trigger = styled(Popover.Trigger)`
  border: none;
  background: transparent;
`
