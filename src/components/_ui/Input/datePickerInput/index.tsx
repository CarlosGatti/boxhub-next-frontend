import 'react-datepicker/dist/react-datepicker.css'

import { Container, Content, Title } from './styles'

import { AiOutlineCalendar } from 'react-icons/ai'
import DatePicker from 'react-datepicker'
import { IoIosArrowUp } from 'react-icons/io'
import React from 'react'

interface InputDatePickerProps {
  type: 'date' | 'time'
  label?: string
  id: string
  onChange?: any
  value?: any
}
interface ExampleCustomInputProps {
  value?: any
  onClick?: any
}

export const DatePickerInput = ({
  type,
  label,
  onChange,
  value,
}: InputDatePickerProps) => {
  const ExampleCustomInput = ({
    value,
    onClick,
    ...rest
  }: ExampleCustomInputProps) => (
    <Content type="button" onClick={onClick} {...rest}>
      {type === 'date' ? <AiOutlineCalendar /> : <IoIosArrowUp />}
      {value}
    </Content>
  )

  return (
    <>
      <Container>
        <Title>{label}</Title>
        {type === 'date' ? (
          <DatePicker
            onChange={onChange}
            customInput={<ExampleCustomInput />}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            selected={value}
          />
        ) : (
          <DatePicker
            onChange={onChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            customInput={<ExampleCustomInput />}
            selected={value}
          />
        )}
      </Container>
    </>
  )
}
