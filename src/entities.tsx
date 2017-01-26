import {PropTypes, ReactElement, ReactType} from 'react'

export const stepperContext = {
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  canAdvance: PropTypes.bool,
  canReverse: PropTypes.bool,
  setPageIndex: PropTypes.func,
}

export type Context = {
  pages: Array<PageConfig>
  currentPage: number
  canAdvance: boolean
  canReverse: boolean
  setPageIndex: (index: number) => void
}

export type Awaitable<T> = Promise<T>|T

export type Status = 'done'|'alert'

export type PageConfig = {
  title?: string
  subTitle?: string
  status?: Status
  onLeave?: () => Awaitable<void|boolean>
  onAdvance?: () => Awaitable<void|boolean>
  onReverse?: () => Awaitable<void|boolean>
  canAdvance?: () => boolean
  canReverse?: () => boolean
  render?: () => ReactElement<any>
  component?: ReactType
}
