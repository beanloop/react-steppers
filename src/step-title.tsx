import * as React from 'react'
import {CSSProperties, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

export const StepTitle: StatelessComponent<{style?: CSSProperties}> = compose(
  withStepper,
  setDisplayName('StepTitle'),
)(({pages, currentPage, style}) =>
  <span style={style}>{pages[currentPage].title}</span>
)
