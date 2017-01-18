import {PropTypes, ReactType} from 'react'

export const stepperContext = {
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  canAdvance: PropTypes.bool,
  canReverse: PropTypes.bool,
  setPageIndex: PropTypes.func,
}

export type Awaitable<T> = Promise<T>|T

export type PageConfig = {
  component: ReactType
  onLeave?: () => Awaitable<void|boolean>
  onAdvance?: () => Awaitable<void|boolean>
  onReverse?: () => Awaitable<void|boolean>
  canAdvance?: () => boolean
  canReverse?: () => boolean
}
