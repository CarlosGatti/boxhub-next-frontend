import styled from 'styled-components'

interface checkPrps {
  check: boolean
}

export const Container = styled.div`
  /*   display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-container);
  border-radius: var(--border-radius-default);
  padding: var(--padding-container); */
`
export const WrapperTabs = styled.div`
  /* width: min(640px, 100%); */
`

export const ClickTabs = styled.div`
  display: flex;
  justify-content: center;
  border-radius: var(--border-radius-default);
  background: #f4f3f6;
  /* padding: 4px 8px; */
  gap: 8px;
`
export const Button = styled.button<checkPrps>`
  display: flex;
  justify-content: center;
  border: none;
  display: flex;
  width: min(208px, 100%);
  padding: 8px 20px;
  border-radius: 4px;

  font-weight: 500;
  font-size: var(--font-size-sm);
  color: #878688;
  background: ${(props) =>
    props.check ? 'var(--color-primary)' : 'transparent'};
  color: ${(props) => (props.check ? '#fff' : '#878688')};
  transition: var(--transition);
  &:hover {
    color: ${(props) => (props.check ? '#fff' : 'var(--color-link-hover)')};
  }
`

export const BodyTabs = styled.div``
