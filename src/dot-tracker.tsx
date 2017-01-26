import * as React from 'react'
import {CSSProperties, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {Circle, defaultActiveColor, defaultInactiveColor} from './utils'
import {withStepper} from './with-stepper'

const row = {
  display: 'flex',
  alignItems: 'center' as 'center',
  justifyContent: 'center' as 'center',
}

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
      <Circle
        key={i}
        color={i === currentPage ? activeColor : inactiveColor}
        size={8}
        margin={4}
      />
    )}
  </div>
)
