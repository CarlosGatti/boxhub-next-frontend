import { Container, Label } from './style';
import ReactSelect, { ActionMeta } from 'react-select';

// TransactionTypeSelect.js
import React from 'react';
import { TransactionDefinition } from '../../../generated/graphql';

export interface TransactionDefinitionSelectProps {
  label: string;
  onChange: (value: any, actionMeta: ActionMeta<any>) => void;
  error?: string;
}

const transactionDefinitionOptions = Object.values(TransactionDefinition).map(value => ({
    value,
    label: value.charAt(0) + value.slice(1).toLowerCase(), // Transforma "INCOME" em "Income"
  }));

export const TransactionDefinitionSelect: React.FC<TransactionDefinitionSelectProps> = ({
  label,
  onChange,
  error,
}) => {

  

 
  return (
    <Container>
      <Label htmlFor="transactionDefinition">{label}</Label>
      <ReactSelect
        id="transactionDefinition"
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="transactionDefinition"
        options={transactionDefinitionOptions}
        onChange={onChange}
      />
      {/* {error && <Error>{error}</Error>} */}
    </Container>
  );
};
