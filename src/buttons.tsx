import * as React from 'react'
import {DOMAttributes, ReactChild, ReactType, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

export type AdvanceButtonProps = {
  /**
   * The component to render, it defaults to a browser <button> element.
   */
  component?: ReactType
  /**
   * Callback when the button is used to finish the stepper
   */
  onFinish?: () => void
  /**
   * Callback when the button is used to go to the next page
   */
  onNext?: () => void
  /**
   * A label to show instead of the children when the stepper
   * is on the last page.
   */
  finishLabel?: ReactChild
}

/**
 * Renders a button to go to the next step
 *
 * ### Usage
 * ```
 * <AdvanceButton>
 *   Next
 * </AdvanceButton>
 * ```
 */
export const AdvanceButton: StatelessComponent<AdvanceButtonProps & DOMAttributes<HTMLButtonElement>> = compose(
  withStepper,
  setDisplayName('AdvanceButton'),
)(({
  component: Button = 'button',
  canReverse: _, pageState: __, setPageState: ___,
  pages, canAdvance, canFinish, currentPage, setPageIndex,
  disabled, onClick, onNext, onFinish, finishLabel,
  children, ...props,
}) => {
  const isLast = finishLabel && currentPage + 1 >= pages.length

  return (
    <Button disabled={disabled || (isLast ? !canFinish : !canAdvance)} {...props} onClick={e => {
      let returnValue
      if (currentPage + 1 >= pages.length) {
        if (onFinish) {
          returnValue = onFinish()
        }
      } else {
        if (onNext) {
          returnValue = onNext()
        }
        setPageIndex(currentPage + 1)
      }
      return onClick
        ? onClick(e)
        : returnValue
    }}>
      {finishLabel && currentPage + 1 >= pages.length
        ? finishLabel
        : children
      }
    </Button>
  )
})

export type ReverseButtonProps = {
  /**
   * The component to render, it defaults to a browser <button> element.
   */
  component?: ReactType
  /**
   * Callback when the button is used to cancel the stepper
   */
  onCancel?: () => void
  /**
   * Callback when the button is used to go to the previous page
   */
  onPrevious?: () => void
  /**
   * A label to show instead of the children when the stepper
   * is on the first page.
   */
  cancelLabel?: ReactChild
}

/**
 * Renders a button to go to the previous step
 *
 * ### Usage
 * ```
 * <ReverseButton>
 *   Back
 * </ReverseButton>
 * ```
 */
export const ReverseButton: StatelessComponent<ReverseButtonProps & DOMAttributes<HTMLButtonElement>> = compose(
  withStepper,
  setDisplayName('ReverseButton'),
)(({
  component: Button = 'button',
  canAdvance: _, pages: __, pageState: ___, setPageState: ____, canFinish: _____,
  canReverse, currentPage, setPageIndex,
  disabled, onClick, onPrevious, onCancel, cancelLabel,
  children, ...props,
}) =>
  <Button disabled={disabled || (!cancelLabel && !canReverse)} {...props} onClick={e => {
    let returnValue
    if (currentPage <= 0) {
      if (onCancel) {
        returnValue = onCancel()
      }
    } else {
      if (onPrevious) {
        returnValue = onPrevious()
      }
      setPageIndex(currentPage - 1)
    }
    return onClick
      ? onClick(e)
      : returnValue
  }}>
    {cancelLabel && currentPage <= 0
      ? cancelLabel
      : children
    }
  </Button>
)
