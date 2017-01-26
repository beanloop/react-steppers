import * as React from 'react'
import {DOMAttributes, ReactChild, ReactType, StatelessComponent} from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

export type AdvanceButtonProps = {
  component?: ReactType
  onFinish?: () => void
  onNext?: () => void
  finishLabel?: ReactChild
}

export const AdvanceButton: StatelessComponent<DOMAttributes<HTMLButtonElement> & AdvanceButtonProps> = compose(
  withStepper,
  setDisplayName('AdvanceButton'),
)(({
  component: Button = 'button',
  canReverse: _, pageState: __, setPageState: ___,
  pages, canAdvance, currentPage, setPageIndex,
  disabled, onClick, onNext, onFinish, finishLabel,
  children, ...props,
}) => {
  const isLast = finishLabel && currentPage + 1 >= pages.length

  return (
    <Button disabled={disabled || (!isLast && !canAdvance)} {...props} onClick={e => {
      if (currentPage + 1 >= pages.length) {
        if (onFinish) {
          onFinish()
        }
      } else {
        if (onNext) {
          onNext()
        }
        setPageIndex(currentPage + 1)
      }
      if (onClick) return onClick(e)
    }}>
      {finishLabel && currentPage + 1 >= pages.length
        ? finishLabel
        : children
      }
    </Button>
  )
})

export type ReverseButtonProps = {
  component?: ReactType
  onCancel?: () => void
  onPrevious?: () => void
  cancelLabel?: ReactChild
}

export const ReverseButton: StatelessComponent<DOMAttributes<HTMLButtonElement> & ReverseButtonProps> = compose(
  withStepper,
  setDisplayName('ReverseButton'),
)(({
  component: Button = 'button',
  canAdvance: _, pages: __, pageState: ___, setPageState: ____,
  canReverse, currentPage, setPageIndex,
  disabled, onClick, onPrevious, onCancel, cancelLabel,
  children, ...props,
}) =>
  <Button disabled={disabled || (!cancelLabel && !canReverse)} {...props} onClick={e => {
    if (currentPage <= 0) {
      if (onCancel) {
        onCancel()
      }
    } else {
      if (onPrevious) {
        onPrevious()
      }
      setPageIndex(currentPage - 1)
    }
    if (onClick) return onClick(e)
  }}>
    {cancelLabel && currentPage <= 0
      ? cancelLabel
      : children
    }
  </Button>
)
