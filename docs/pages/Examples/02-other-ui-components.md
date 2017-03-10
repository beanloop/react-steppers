---
title: Other UI Components
imports:
  '{FontIcon}': 'react-toolbox/lib/font_icon'
  '{Stepper, StepperView, StepTitle, TextTracker}': '../../../dist/src/index'
  '{AdvanceButton, ReverseButton}': '../../../dist/src/react-toolbox'
  '{PageOne, PageTwo, PageThree}': '../../src/example-helpers'
---
```store example
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
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch'}}>
    <div style={{display: 'flex', padding: 16}}>
      <StepTitle />
      <span style={{flex: 1}} />
      <TextTracker generateText={(current, total) => `${current + 1} / ${total}`} />
    </div>
    <div style={{padding: 16}}>
      <StepperView />
    </div>
    <div style={{display: 'flex', padding: 16}}>
      <ReverseButton>
        <FontIcon value='chevron_left' />
        Back
      </ReverseButton>
      <span style={{flex: 1}} />
      <AdvanceButton>
        Next
        <FontIcon value='chevron_right' />
      </AdvanceButton>
    </div>
  </div>
</Stepper>
```
### Other UI Components
In this example the same stepper is used but the UI differs a bit.
A title and the step number is shown above the view and the buttons have been
replaced with the [react-toolbox versions](/#/docs/dist/src/react-toolbox/buttons.js).
 
###### Demo
```render
<div>
  {store.example}
</div>
```

###### Code
```stored example jsx
```
