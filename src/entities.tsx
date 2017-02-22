import {PropTypes, ReactElement, ReactType} from 'react'

export const stepperContext = {
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  canAdvance: PropTypes.bool,
  canFinish: PropTypes.bool,
  canReverse: PropTypes.bool,
  setPageIndex: PropTypes.func,
}

export type Context = {
  pages: Array<PageConfig>
  currentPage: number
  canAdvance: boolean
  canFinish: boolean
  canReverse: boolean
  setPageIndex: (index: number) => void
}

export type Awaitable<T> = Promise<T>|T

export type Status = 'done'|'alert'

export type PageConfig = {
  title?: string
  subTitle?: string
  status?: Status
  onEnter?: (previousIndex: number) => Awaitable<void>
  onLeave?: (nextIndex: number) => Awaitable<void|boolean>
  onAdvance?: (nextIndex: number) => Awaitable<void|boolean>
  onReverse?: (nextIndex: number) => Awaitable<void|boolean>
  canAdvance?: () => boolean
  canReverse?: () => boolean
  render?: () => ReactElement<any>
  component?: ReactType
}
