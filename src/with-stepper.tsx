import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import setDisplayName from 'recompose/setDisplayName'
import wrapDisplayName from 'recompose/wrapDisplayName'
import {stepperContext} from './entities'

/**
 * A HOC to inject the stepperContext as properties
 */
export const withStepper = WrappedComponent => compose(
  setDisplayName(wrapDisplayName(WrappedComponent, 'withStepper')),
  getContext(stepperContext)
)(WrappedComponent)
