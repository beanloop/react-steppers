import * as React from 'react'
import {CSSProperties, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

const defaultGenerateText = (current, total) => `Step ${current + 1} of ${total}`

export const TextTracker: StatelessComponent<{
  generateText?: (current: number, total: number) => string
  style?: CSSProperties
}> = compose(
  withStepper,
  setDisplayName('TextTracker'),
)(({pages, currentPage, generateText = defaultGenerateText, style}) =>
  <span style={style}>{generateText(currentPage, pages.length)}</span>
)
