import * as React from 'react'
import {Children, Component, ReactElement} from 'react'
import {PageConfig, stepperContext} from './entities'

export type Props = {
  /**
   * The page index to set as active page
   */
  index?: number
  /**
   * Called when the page changes. If this is passed, the Stepper
   * becomes controlled and will expect the parent to maintain the state and update
   * the index property appropriately.
   */
  onChange?: (index: number) => void
  pages: Array<PageConfig>
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
}

/**
 * The component where a stepper is configured and holds all state
 * and logic for navigating a stepper.
 *
 * It does not render any UI by itself and must be accompanied by
 * UI components like the DotTracker, Advance and Reverse Buttons or others.
 *
 * ### Usage
 * ```
 * <Stepper pages={[{component: PageOne}, {component: PageTwo}]}>
 *  <StepperView />
 *  <Row>
 *    <ReverseButton>Back</ReverseButton>
 *    <DotTracker />
 *    <AdvanceButton>Next</AdvanceButton>
 *  </Row>
 * </Stepper>
 * ```
 */
export class Stepper extends Component<Props, State> {
  static childContextTypes = stepperContext

  get pageIndex() {
    if (this.props.onChange) return this.props.index
    else return this.state.currentPage
  }

  get canAdvance() {
    const {pages} = this.props
    const currentPage = this.pageIndex
    if (currentPage + 1 >= pages.length) return false
    const page = pages[currentPage]
    return !page.canAdvance || page.canAdvance()
  }

  get canFinish() {
    const {pages} = this.props
    const currentPage = this.pageIndex
    if (currentPage + 1 < pages.length) return false
    const page = pages[currentPage]
    return !page.canAdvance || page.canAdvance()
  }

  get canReverse() {
    const currentPage = this.pageIndex
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
    const currentPage = this.pageIndex

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

    this._setIndex(index)
  }

  constructor(props: Props) {
    super(props)
    this.state = {currentPage: props.index || 0}
  }

  getChildContext() {
    return {
      pages: this.props.pages,
      currentPage: this.pageIndex,
      canAdvance: this.canAdvance,
      canFinish: this.canFinish,
      canReverse: this.canReverse,
      setPageIndex: this.setPageIndex,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pages.length <= this.pageIndex) {
      this._setIndex(0)
    }
    if (nextProps.index !== this.props.index && !nextProps.onChange && typeof nextProps.index === 'number') {
      this._setIndex(nextProps.index)
    }
  }

  render() {
    const {children} = this.props

    return Children.count(children) < 2
      ? children as ReactElement<any>
      : <div>{children}</div>
  }

  private _setIndex(index: number) {
    if (this.props.onChange) {
      this.props.onChange(index)
    } else {
      this.setState({currentPage: index})
    }
  }
}
