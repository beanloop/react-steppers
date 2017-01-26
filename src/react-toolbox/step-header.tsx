import * as React from 'react'
import {CSSProperties} from 'react'
import {Column} from 'styled-material/dist/src/layout'
import {PageConfig} from '../entities'
import {ClickableRow, defaultActiveColor, defaultAlertColor} from '../utils'
import {StepCircle} from './step-circle'

export type Props = {
  step: number
  active: boolean
  page: PageConfig
  onClick?: (e: Event) => void
  style?: CSSProperties
  activeColor?: string
  alertColor?: string
}

export const StepHeader = ({step, active, page, activeColor, alertColor = defaultAlertColor, style, onClick}: Props) =>
  <ClickableRow
    disabled={active}
    horizontal='center'
    style={{
      paddingBottom: 16,
      ...style,
    }}
    onClick={onClick}
  >
    <StepCircle step={step} active={active} status={page.status} activeColor={activeColor} alertColor={alertColor} />
    <Column vertical='center'>
      <span style={{
        paddingLeft: 4,
        color:
          page.status === 'alert'
            ? alertColor
          :
          active
            ? 'rgba(0, 0, 0, 0.87)'
          :
            'rgba(0, 0, 0, 0.38)',
        fontSize: 14,
        fontWeight: active ? 500 : 400
      }}>
        {page.title}
      </span>
    </Column>
  </ClickableRow>
