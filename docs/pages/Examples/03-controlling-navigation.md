---
title: Controlling Navigation
imports:
  '{Input}': 'react-toolbox'
  '{Stepper, StepperView, DotTracker}': '../../../dist/src/index'
  '{AdvanceButton, ReverseButton}': '../../../dist/src/index'
---
```store example
<Stepper pages={[
  {
    canAdvance: () => this.state.username && this.state.username.length > 2,
    render: () => 
      <div>
        Please enter a username
        <Input onChange={username => this.setState({username})} />
      </div>,
  },
  {
    canReverse: () => false,
    render: () => <span>Now there's no going back</span>,
  },
  {
    canAdvance: () => this.state.username === this.state.repeat,
    render: () => 
      <div>
        Please repeat the username
        <Input onChange={repeat => this.setState({repeat})} />
      </div>,
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
      <AdvanceButton finishLabel='Register' onFinish={() => this.setState({registered: true})}>
        Next
      </AdvanceButton>
    </div>
  </div>
</Stepper>
```
### Controlling Navigation
With `canAdvance` and `canReverse` is it possible for pages to control if it's 
okay to navigate away from there current page

###### Demo
```render
<div>
  {this.state.registered
    ? <div>
        You have registered!
      </div>
    : store.example
  }
</div>
```

###### Code
```stored example jsx
```
