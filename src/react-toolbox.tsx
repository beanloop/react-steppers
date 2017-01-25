import * as React from 'react'
import {ReactChild, StatelessComponent} from 'react'
import {Button, ButtonProps} from 'react-toolbox/lib/button'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import {withStepper} from './with-stepper'

export const AdvanceButton: StatelessComponent<ButtonProps & {
  onFinish?: () => void
  onNext?: () => void
  finishLabel?: ReactChild
}> = compose(
  withStepper,
  setDisplayName('AdvanceButton'),
)(({
  canReverse: _, pageState: __, setPageState: ___,
  pages, canAdvance, currentPage, setPageIndex,
  disabled, onClick, onNext, onFinish, finishLabel,
  children, ...props,
}) =>
  <Button disabled={disabled || (!finishLabel && !canAdvance)} {...props} onClick={e => {
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

export const ReverseButton: StatelessComponent<ButtonProps & {
  onCancel?: () => void
  onPrevious?: () => void
  cancelLabel?: ReactChild
}> = compose(
  withStepper,
  setDisplayName('ReverseButton'),
)(({
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
