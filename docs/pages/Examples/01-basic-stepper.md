---
title: Basic Stepper
imports:
  '{Stepper, StepperView, DotTracker, AdvanceButton, ReverseButton}': '../../../dist/src/index'
  '{PageOne, PageTwo, PageThree}': '../../src/example-helpers'
---
```store example
<Stepper pages={[
  {
    component: PageOne,
  },
  {
    component: PageTwo,
  },
  {
    component: PageThree,
  },
]}>
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch'}}>
    <div style={{padding: 16}}>
      <StepperView />
    </div>
    <div style={{display: 'flex', padding: 16}}>
      <ReverseButton>
        Back
      </ReverseButton>
      <DotTracker style={{flex: 1}} />
      <AdvanceButton>
        Next
      </AdvanceButton>
    </div>
  </div>
</Stepper>
```
### Basic Stepper
The Stepper component is the base for all steppers. It is used to configure the
stepper. Most notably is the pages property which list all pages in the stepper.
The Stepper component does not render any DOM elements on its own and must be
paired with other components to get something visible. This demo show a basic setup
with a view to see the active page, buttons to navigate the stepper and a tracker
to see the progress.

###### Demo
```render
<div>
  {store.example}
</div>
```

###### Code
```stored example jsx
```
