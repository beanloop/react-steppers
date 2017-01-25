import * as React from 'react'
import {Component} from 'react'
import {stepperContext} from './entities'

export class StepperView extends Component<{}, {}> {
  static contextTypes = stepperContext

  render() {
    const {pageState, setPageState, pages, currentPage} = this.context
    const Component = pages[currentPage].component

    return <Component state={pageState} setState={setPageState} />
  }
}
