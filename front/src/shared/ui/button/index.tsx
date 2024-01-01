'use client'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'


interface Props {
    onClick?: ()=> void
    width?: number
    height?: number
    color?: string
    font_size?: number
    type?: "primary"|"default"
    children?: ReactNode

}

const Button: FC<Props> = ({width=200, height=75, children, type='primary', font_size=24, ...props}) => {
  const sizes = {
    width: `${width}px`,
    height:`${height}px`, 
    fontSize: `${font_size}px`
    }

  const color = (type === 'primary'?
  styles.primary:
  styles.default
  )
  return (
    <button {...props} style={{...sizes}} className={[styles.button, color].join(' ')}>
     {children}
    </button>
  )
}

export default Button