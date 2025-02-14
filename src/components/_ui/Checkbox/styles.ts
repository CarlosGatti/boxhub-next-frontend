import styled from 'styled-components'

interface checkboxStyleProps {
  fontWeight?: number
  type: 'checkbox' | 'radio'
}

export const CheckboxContainer = styled.div<checkboxStyleProps>`
  display: flex;
  flex-direction: column;
  /*  width: 0px; */
  label {
    cursor: pointer;
  }

  span {
    font-style: normal;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
    font-size: var(--font-size-sm);
    color: #3a393b;
    white-space: nowrap;
  }

  input[type=${(props) => props.type}] {
    display: none;
  }

  input[type=${(props) => props.type}] + span:before {
    width: var(--font-size-md);
    height: var(--font-size-md);
    border: 1.5px solid #3a393b;
    content: '';
    display: inline-block;
    margin-right: 8px;
    padding: 0;
    vertical-align: sub;
    border-radius: 50%;
  }

  input[type=${(props) => props.type}]:checked + span:before {
    background: #00214A;
    border: 1.5px solid #3a393b;
    box-shadow: inset 0px 0px 0px 3px #fff;
    color: #333;
    content: '';
    text-align: center;
    border-radius: 50%;
  }

  input[type=${(props) => props.type}]:focus + span::before {
    outline: 0;
  }
`
