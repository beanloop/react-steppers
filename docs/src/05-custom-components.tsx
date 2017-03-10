import * as React from 'react'
import {withStepper} from '../../dist/src/with-stepper'

const containerStyle = {
  display: 'flex',
  alignItems: 'center' as 'center',
  justifyContent: 'space-around' as 'space-around',
  paddingTop: 32,
  paddingBottom: 32,

  background: 'whitesmoke',
}

const commonPageStyle = {
  display: 'flex',
  alignItems: 'center' as 'center',
  justifyContent: 'center' as 'center',

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

export const CowerFlow = withStepper(({pages, currentPage, setPageIndex}) =>
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
