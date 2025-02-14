import Select from 'react-select';
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  .select__control {
    border: 0.5px solid #00214A;
    border-radius: var(--border-radius-input);

    &:hover {
      border-color: #00214A;
      border: 1px solid #00214A;
    }

    &--is-focused, &--menu-is-open {
      border-color: #00214A;
      border: 1px solid #00214A;
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
      background-color: #00214A; // Cor de fundo da opção selecionada
      color: #ffffff; // Cor do texto da opção selecionada
    }
  }
`;

export const Label = styled.label`
  font-size: var(--font-size-sm);
`
