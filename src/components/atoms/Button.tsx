import React, { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ComponentProps<'button'> {
  width: number
  children: ReactNode
  onClick: () => void
  isBorderLeft?: boolean
  isBorderRight?: boolean
  isBorderTop?: boolean
  isBorderBottom?: boolean
}

const Button = ({
  onClick,
  children,
  width,
  isBorderLeft,
  isBorderRight,
  isBorderTop,
  isBorderBottom
}: ButtonProps) => {
  return (
    <ButtonStyle
      width={width}
      onClick={onClick}
      isBorderLeft={isBorderLeft}
      isBorderBottom={isBorderBottom}
      isBorderRight={isBorderRight}
      isBorderTop={isBorderTop}>
      {children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button<{
  width: number
  isBorderLeft?: boolean
  isBorderRight?: boolean
  isBorderTop?: boolean
  isBorderBottom?: boolean
}>`
  text-align: center;
  height: 100%;
  width: ${(props) => props.width + '%'};
  border-left: ${(props) => (props.isBorderLeft ? '1px solid black' : 'none')};
  border-right: ${(props) =>
    props.isBorderRight ? '1px solid black' : 'none'};
  border-top: ${(props) => (props.isBorderTop ? '1px solid black' : 'none')};
  border-bottom: ${(props) =>
    props.isBorderBottom ? '1px solid black' : 'none'};
`
