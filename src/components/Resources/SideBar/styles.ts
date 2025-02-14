import { SideBar } from '../../_ui/SideBar'
import styled from 'styled-components'

export const SideBarRight = styled(SideBar)`
  width: min(281px, 100%);

  @media (max-width: 1092px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  position: relative;
  font-size: var(--font-size-md);
  color: #2c3136;
  position: relative;
  padding-bottom: 1.5rem;

  button {
    position: absolute;
    bottom: 3px;
    right: 0;
    border: none;
    background: transparent;
    font-weight: 600;
    color: var(--color-link);
    padding-right: 16px;
    transition: var(--transition);

    &:hover {
      color: var(--color-link-hover);
    }

    ::before {
      content: '...ver mais';
    }
  }
  .text-expanded {
    max-height: none;
    button {
      ::before {
        content: 'ver menos';
      }
    }
  }
  > div {
    max-height: 168px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Title = styled.p`
  color: #3a393b;
  font-size: var(--font-size-md);
  font-weight: 600;
  padding-bottom: 0.5rem;
`
export const Divider = styled.div`
  border-bottom: 1px solid #c7c6c8;
  width: 100%;
  margin: 0.5rem 0;
`
