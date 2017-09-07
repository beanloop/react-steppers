import * as React from 'react'
import {CSSProperties, ReactChild} from 'react'
//import {Row} from 'styled-material/dist/src/layout'

export const defaultActiveColor = '#3f51b5'
export const defaultAlertColor = '#f44336'
export const defaultInactiveColor = '#bdbdbd'

export type CircleProps = {
  color: string
  size: number
  margin?: number
  children?: ReactChild
  style?: CSSProperties
}

/**
 * A simple circle, used for step icons and by the dot tracker.
 */
export const Circle = ({size, color, margin, children, style}: CircleProps) =>
  <div children={children} style={{
    margin,
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
    ...style,
  }} />

/**
 * A function to filter keyboard events to spacebar and Enter
 */
export const onKeyboardClick = fn => (e: React.KeyboardEvent<any>) => {
  if (e.key === ' ' || e.key === 'Enter') {
    return fn(e)
  }
}

/**
 * A flexbox row that is focusable and clickable like a button
 */
export const ClickableRow = ({onClick, disabled, style, ...props}) =>
  <div
    role={!disabled && 'button'}
    style={{
      cursor: disabled ? 'default' : 'pointer',
      ...style,
    }}
    tabIndex={disabled ? -1 : 0}
    onClick={onClick}
    onKeyPress={onKeyboardClick(onClick)}
    {...props}
  />

/**
 * A simple vertical line, used for constructing the vertical stepper
 */
export const VerticalLine = () =>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 36,
    bottom: 16,
    heigth: '100%',
    width: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  }} />
