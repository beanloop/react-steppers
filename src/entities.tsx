import {PropTypes, ReactElement, ReactType} from 'react'

/**
 * The stepper context as PropTypes to be consumed by React
 */
export const stepperContext = {
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  canAdvance: PropTypes.bool,
  canFinish: PropTypes.bool,
  canReverse: PropTypes.bool,
  setPageIndex: PropTypes.func,
}

/**
 * The context that is avalible inside a stepper and is
 * consumed by the various UI components
 */
export type Context = {
  pages: Array<PageConfig>
  currentPage: number
  canAdvance: boolean
  canFinish: boolean
  canReverse: boolean
  setPageIndex: (index: number) => void
}

export type Awaitable<T> = Promise<T>|T

/**
 * The allowed page statuses
 */
export type Status = 'done'|'alert'

/**
 * A page in the stepper
 */
export type PageConfig = {
  title?: string
  subTitle?: string
  status?: Status
  /**
   * Callback when the page is about to be set as active.
   *
   * If a Promise is returned, it will be awaited before the page is actived.
   * This is not called when the stepper is first rendered.
   */
  onEnter?: (previousIndex: number) => Awaitable<void>
  /**
   * Callback when the page is about the be left.
   *
   * If a Promise is returned, it will be awaited before the next page is actived.
   * If false or a promise that resolves to false is returned the navigation is aborted.
   */
  onLeave?: (nextIndex: number) => Awaitable<void|boolean>
  /**
   * Callback when the page is about the be left for a subsequent page.
   *
   * If a Promise is returned, it will be awaited before the next page is actived.
   * If false or a promise that resolves to false is returned the navigation is aborted.
   */
  onAdvance?: (nextIndex: number) => Awaitable<void|boolean>
  /**
   * Callback when the page is about the be left for a preceding page.
   *
   * If a Promise is returned, it will be awaited before the next page is actived.
   * If false or a promise that resolves to false is returned the navigation is aborted.
   */
  onReverse?: (nextIndex: number) => Awaitable<void|boolean>
  /**
   * Controls whenever the page is allow to be left for a subsequent page.
   */
  canAdvance?: () => boolean
  /**
   * Controls whenever the page is allow to be left for a preceding page.
   */
  canReverse?: () => boolean
  /**
   * A function to render when this page is active, takes precedence over
   * component if both is set.
   */
  render?: () => ReactElement<any>
  /**
   * The component to render when this page is active. Either component or
   * render must be specified.
   */
  component?: ReactType
}
