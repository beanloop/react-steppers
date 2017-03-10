---
title: Vertical Stepper
imports:
  '{Stepper}': '../../../dist/src/index'
  '{AdvanceButton, ReverseButton, VerticalStepper}': '../../../react-toolbox'
  '{PageOne, PageTwo, PageThree}': '../../src/example-helpers'
---
```store example
<Stepper pages={[
  {
    title: 'Step one',
    status: 'done',
    component: PageOne,
  },
  {
    title: 'Step two',
    status: 'alert',
    component: PageTwo,
  },
  {
    title: 'Step three',
    component: PageThree,
  },
]}>
  <VerticalStepper />
</Stepper>
```
### Vertical Stepper
Depending on the design it's sometimes not possible or inconvenient to break
the stepper down into composable components. The Vertical Stepper is an example
of that which renders the view and the buttons on different locations while you 
navigate though it.

The vertical stepper also support the status property on pages which can be used
to help the user know their progress through the stepper.
 
###### Demo
```render
<div>
  {store.example}
</div>
```

###### Code
```stored example jsx
```
