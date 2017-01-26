import * as React from 'react'
import {render} from 'react-dom'
import {DotTracker, Stepper, StepperView, TextTracker} from 'react-step'
import {AdvanceButton, ReverseButton, VerticalStepper} from 'react-step/react-toolbox'
import 'react-toolbox/lib/commons.scss'
import {FontIcon} from 'react-toolbox/lib/font_icon'
import {Column, Row} from 'styled-material/dist/src/layout'

const Bar = props => <div style={{
  padding: 16,
}} {...props} />

const Page = props => <div style={{
}} {...props} />

const PageOne = () =>
  <Page>
    Page one
  </Page>

const PageTwo = () =>
  <Page>
    Page two
  </Page>

const PageThree = () =>
  <Page>
    Page three
  </Page>

export const App = () =>
  <Stepper pages={[
    {
      title: 'Step one',
      component: PageOne,
    },
    {
      title: 'Step two',
      component: PageTwo,
    },
    {
      title: 'Step three',
      component: PageThree,
    },
  ]}>
    <Column horizontal='stretch'>
      <Bar>
        <TextTracker />
      </Bar>
      <Bar>
        <StepperView />
      </Bar>
      <Bar>
        <Row>
          <ReverseButton>
            <FontIcon value='chevron_left' />
            Back
          </ReverseButton>
          <DotTracker style={{flex: 1}} />
          <AdvanceButton finishLabel='Finish' onFinish={() => alert('Good job!')}>
            Next
            <FontIcon value='chevron_right' />
          </AdvanceButton>
        </Row>
      </Bar>
      <VerticalStepper />
    </Column>
  </Stepper>

render(<App />, document.querySelector('#app'))
