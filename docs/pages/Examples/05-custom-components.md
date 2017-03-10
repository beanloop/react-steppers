---
title: Custom Components
imports:
  '{Stepper}': '../../../dist/src/index'
  '{AdvanceButton, ReverseButton}': '../../../react-toolbox'
  '{PageOne, PageTwo, PageThree}': '../../src/example-helpers'
  '{CowerFlow}': '../../src/05-custom-components'
---
```store example
<Stepper allowJumpAhead pages={[
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
  <CowerFlow />
</Stepper>
```
### Custom Components
The separation of logic and UI allows you to render any UI you want 
for your stepper. This is an example of using the `withStepper` HOC to
create a custom view.

###### Component Implementation
```code jsx
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  paddingTop: 32,
  paddingBottom: 32,

  background: 'whitesmoke',
}

const commonPageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'white',
}

const activePageStyle = {
  ...commonPageStyle,

  width: 250,
  height: 250,
}

const inactivePageStyle = {
  ...commonPageStyle,

  width: 50,
  height: 50,
}

const CowerFlow = withStepper(({pages, currentPage, setPageIndex}) =>
  <div style={containerStyle}>
    {pages.map((page, i) =>
      <div
        key={i}
        onClick={() => setPageIndex(i)}
        style={i === currentPage
          ? activePageStyle
          : inactivePageStyle
        }
      >
        {page.render ? page.render() : <page.component />}
      </div>
    )}
  </div>
)
```
 
###### Demo
```render
<div>
  {store.example}
</div>
```

###### Usage
```stored example jsx
```
