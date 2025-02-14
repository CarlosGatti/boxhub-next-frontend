import styled, { css }  from 'styled-components'

import Select from 'react-select';

interface CustomSelectProps extends SelectProps {
  error?: string;
  label: string;
}


export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  .select__control {
    border: 1.3px solid #00214A;
    border-radius: var(--border-radius-input);


    ${({ error }) =>
      error &&
      css`
        border-color: #d9534f;
        &:hover {
          border-color: #d43f3a;
        }
      `}


      
    &:hover {
      border-color: #0033A1;
      border: 1px solid #0033A1;
    }

    &--is-focused, &--menu-is-open {
      border-color: #0033A1;
      border: 1px solid #0033A1;
      box-shadow: 0 0 0 1px #00214A; // Adiciona um box shadow para manter a consistência no foco
    }

    .select__single-value, .select__input input {
      color: #00214A; // Força a cor do texto da opção selecionada e do input
    }

    .select__placeholder {
      color: #878688; // Cor do placeholder, ajuste conforme necessário
    }

    .select__dropdown-indicator {
      color: #00214A; // Cor do ícone de dropdown

      &:hover {
        color: #00214A; // Cor do ícone de dropdown ao passar o mouse
      }
    }
  }

  .select__menu {
    // Estilos adicionais para o menu dropdown, se necessário
    border-radius: var(--border-radius-input);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
  }

  .select__option {
    // Estilos para as opções do menu dropdown
    &:hover, &--is-focused {
      background-color: #e4e4e4; // Cor de fundo ao passar o mouse e focar
    }

    &--is-selected {
      background-color: #191919;
      color: #ffffff; // Cor do texto da opção selecionada
    }
  }
`;
export const Error = styled.div`
  min-height: 23px;
  font-size: var(--font-size-xs);
  color: var(--color-danger);
  padding-left: 3px;
`
export const Label = styled.label`
  font-size: var(--font-size-sm);
`
