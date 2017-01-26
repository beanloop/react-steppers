import * as React from 'react'
import {Children, Component, ReactElement} from 'react'
import {PageConfig, stepperContext} from './entities'

export type Props = {
  pages: Array<PageConfig>
  initialState?: any
  /**
   * Allow reversing more than one step at a time
   * @default true
   */
  allowJumpBack?: boolean
  /**
   * Allow advancing more than one step at a time
   * @default false
   */
  allowJumpAhead?: boolean
}

export type State = {
  currentPage?: number
  pageState?: any,
}

export class Stepper extends Component<Props, State> {
  static childContextTypes = stepperContext

  state = {currentPage: 0} as State

  get canAdvance() {
    const {pages} = this.props
    const {currentPage} = this.state
    if (currentPage + 1 >= pages.length) return false
    const page = pages[currentPage]
    return !page.canAdvance || page.canAdvance()
  }

  get canReverse() {
    const {currentPage} = this.state
    if (currentPage <= 0) return false
    const page = this.props.pages[currentPage]
    return !page.canReverse || page.canReverse()
  }

  allowNavigate = async (fn, toIndex: number) => {
    if (fn) {
      const navigate = await fn(toIndex)
      return navigate !== false
    } else return true
  }
  setPageIndex = async (index: number) => {
    const {pages, allowJumpAhead, allowJumpBack = true} = this.props
    const {currentPage} = this.state

    if (index >= pages.length) throw RangeError(`index ${index} is higher than avalible pages ${pages.length}`)
    if (index < 0) throw RangeError(`index ${index} is lower than zero`)

    const page = pages[currentPage]

    if (index > currentPage) {
      if (index > currentPage + 1 && !allowJumpAhead) return false
      if (!this.canAdvance || !(await this.allowNavigate(page.onAdvance, index))) return false
    } else {
      if (index < currentPage - 1 && !allowJumpBack) return false
      if (!this.canReverse || !(await this.allowNavigate(page.onReverse, index))) return false
    }
    if (!(await this.allowNavigate(page.onLeave, index))) return false

    const nextPage = pages[index]
    await this.allowNavigate(nextPage.onEnter, currentPage)


    this.setState({currentPage: index})
  }
  setPageState = newState => {
    if (typeof newState === 'function') {
      this.setState(state => ({pageState: {...state.pageState, ...newState(state.pageState)}}))
    }
    this.setState({pageState: {...this.state.pageState, ...newState}})
  }

  constructor(props: Props) {
    super(props)
    this.state.pageState = props.initialState
  }

  getChildContext() {
    return {
      pages: this.props.pages,
      currentPage: this.state.currentPage,
      canAdvance: this.canAdvance,
      canReverse: this.canReverse,
      setPageIndex: this.setPageIndex,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pages.length <= this.state.currentPage) {
      this.setState({
        currentPage: 0,
      })
    }
  }

  render() {
    const {children} = this.props

    return Children.count(children) < 2
      ? children as ReactElement<any>
      : <div>{children}</div>
  }
}
