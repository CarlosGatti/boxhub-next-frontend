import { BsEye, BsEyeSlash } from 'react-icons/bs'
import {
  Container,
  Error,
  Icon,
  IconPassword,
  IconSearch,
  InputContainer,
  Label,
} from './styles'
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { LoadingIcon } from '../../LoadingIcon'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  error?: any
  styleInput?: any
  onChange?: any
  password?: boolean
  type?: string
  isSearch?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    error,
    styleInput,
    onChange,
    password,
    isSearch,
    isLoading,
    icon,
    iconPosition,
    type = 'text',
    ...rest
  },
  ref,
) => {
  const [typeInput, setTypeInput] = useState('')
  const handlePassword = () => {
    if (typeInput === '') return setTypeInput('text')
    setTypeInput(typeInput === 'password' ? 'text' : 'password')
  }
  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div style={{ position: 'relative' }}>
        {iconPosition && (
          <div>
            <Icon iconPosition={iconPosition}>{icon}</Icon>
          </div>
        )}

        {isSearch && (
          <IconSearch
            style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            type="button"
          >
            {isLoading ? (
              <LoadingIcon style={{ width: '24px', height: '24px' }} />
            ) : (
              <AiOutlineSearch />
            )}
          </IconSearch>
        )}
        <InputContainer
          iconPosition={iconPosition}
          style={styleInput}
          error={!!error}
          type={typeInput || type}
          id={name}
          name={name}
          ref={ref}
          onChange={onChange}
          {...rest}
        />
        {type === 'password' && (
          <IconPassword
            onClick={handlePassword}
            type={'button'}
            aria-label="Mostrar ou ocultar a senha"
          >
            {typeInput === 'text' ? <BsEye /> : <BsEyeSlash />}
          </IconPassword>
        )}
      </div>
      <Error>{error && <div>{error?.message}</div>}</Error>
    </Container>
  )
}

export const Input = forwardRef(InputBase)
