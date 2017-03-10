import * as React from 'react'
import {CSSProperties, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

const defaultGenerateText = (current, total) => `Step ${current + 1} of ${total}`

/**
 * A component for tracking the current and total pages
 * using a text.
 *
 * ### Usage
 * ```
 * <TextTracker />
 * ```
 *
 * ### Options
 * The default behavior is to render a tect in the format `Step 1 of 2`.
 * To render in a different format, pass a function in the generateText property
 * that takes the current and total number of pages as arguments and returns
 * the text to be rendered.
 *
 * For example
 * ```
 * (current, total) => `${current + 1} / ${total}`
 * ```
 * will render `1 / 2`. Note that the current page is zero based.
 */
export const TextTracker: StatelessComponent<{
  generateText?: (current: number, total: number) => string
  style?: CSSProperties
}> = compose(
  withStepper,
  setDisplayName('TextTracker'),
)(({pages, currentPage, generateText = defaultGenerateText, style}) =>
  <span style={style}>{generateText(currentPage, pages.length)}</span>
)
