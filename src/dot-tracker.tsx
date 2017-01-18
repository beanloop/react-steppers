import * as React from 'react'
import {CSSProperties, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

const defaultActiveColor = '#03a9f4'
const defaultInactiveColor = '#bdbdbd'

const row = {
  display: 'flex',
  alignItems: 'center' as 'center',
  justifyContent: 'center' as 'center',
}

export const Circle = ({size, color}) =>
  <div style={{
    margin: size / 2,
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
  }} />

export const DotTracker: StatelessComponent<{
  acttiveColor?: string
  inactiveColor?: string
  style?: CSSProperties
}> = compose(
  withStepper,
  setDisplayName('DotTracker'),
)(({
  pages, currentPage, style,
  activeColor = defaultActiveColor,
  inactiveColor = defaultInactiveColor,
}) =>
  <div style={style ? Object.assign({}, row, style) : row}>
    {Array.from(Array(pages.length)).map((_, i) =>
      <Circle key={i} color={i === currentPage ? activeColor : inactiveColor} size={8} />
    )}
  </div>
)
