import { ButtonSubmit, Container } from './styles'

import { ButtonHTMLAttributes } from 'react'
import { LoadingIcon } from '../LoadingIcon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  labelColor?: string
  backgroundColor?: string
  buttonStyle?: any
  isLoading?: boolean
  isDisabled?: boolean
  typeButton?: 'primary' | 'secondary' | 'tertiary'
  maxWidth?: number
  icon?: any
}

export const Button = ({
  onClick,
  buttonStyle,
  isLoading = false,
  isDisabled = false,
  typeButton = 'primary',
  maxWidth,
  children,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <Container style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}>
      <ButtonSubmit
        className={`${typeButton}`}
        disabled={isLoading || isDisabled}
        {...rest}
        style={{
          ...buttonStyle,
        }}
        onClick={onClick}
      >
        <div className="children">
          <>
            {isLoading ? (
              <LoadingIcon
                style={{ width: 20, height: 20, marginRight: children ? 5 : 0 }}
              />
            ) : (
              icon || null
            )}
            {children}
          </>
        </div>
      </ButtonSubmit>
    </Container>
  )
}
