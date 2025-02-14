import { Container, Error, Label } from './style';
import Select, { ActionMeta } from 'react-select';

import React from 'react';
import { TransactionFinancialType } from '../../../generated/graphql';
import { useController } from 'react-hook-form';

const transactionTypeOptions = Object.values(TransactionFinancialType).map(value => ({
  value,
  label: value.charAt(0) + value.slice(1).toLowerCase(), // Transforma "INCOME" em "Income"
}));

export const TransactionTypeSelect = ({ field, error }) => {

  return (
    <Container     error={error}>
      <Label htmlFor="transactionType">Transaction Type *</Label>
      <Select
        {...field}
        id="type"
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="type"
    
        options={transactionTypeOptions}
        value={transactionTypeOptions.find(option => option.value === field.value)}
        onChange={option => field.onChange(option.value)}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};
