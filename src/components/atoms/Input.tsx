import React, { ChangeEventHandler, ComponentProps } from 'react'
import styled from 'styled-components'

interface InputProps extends ComponentProps<'input'> {
  width: number
  onChangeType?: (isHidden: boolean) => void
  onBlur?: () => void
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  isBorder: boolean
}

const Input = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  isBorder,
  width
}: InputProps) => {
  return (
    <InputStyle
      width={width}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      isBorder={isBorder}
      maxLength={100}
    />
  )
}

export default Input

const InputStyle = styled.input<{ width: number; isBorder: boolean }>`
  width: ${(props) => props.width + '%'};
  height: 40px;
  border: ${(props) => (props.isBorder ? '1px solid #000000' : 'none')};
  padding-left: 10px;
  padding-right: 10px;
  &::placeholder {
  }
`
