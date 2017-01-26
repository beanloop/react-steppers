import * as React from 'react'
import {StatelessComponent} from 'react'
import {Context} from '../entities'
import {VerticalLine} from '../utils'
import {withStepper} from '../with-stepper'
import {StepHeader} from './step-header'

export const enhance = withStepper

export type Props = {
  activeColor?: string
  alertColor?: string
}

export const StatelessVerticalStepper = ({pages, currentPage, setPageIndex, activeColor, alertColor}: Props & Context) =>
  <div style={{position: 'relative', marginTop: 24}}>
    <VerticalLine />
    <div style={{paddingLeft: 60}}>
      {pages.map((page, i) =>
        <div key={i} style={currentPage === i - 1 ? {paddingTop: 32} : {}}>
          <StepHeader
            step={i + 1}
            active={currentPage === i}
            page={page}
            onClick={() => setPageIndex(i)}
            style={{position: 'relative', right: 44}}
            activeColor={activeColor}
            alertColor={alertColor}
          />
          {currentPage === i && (
            page.render
              ? page.render()
              : <page.component />
          )}
        </div>
      )}
    </div>
  </div>

export const VerticalStepper: StatelessComponent<Props> = enhance(StatelessVerticalStepper)
