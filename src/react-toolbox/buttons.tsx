import * as React from 'react'
import {StatelessComponent} from 'react'
import {Button, ButtonProps} from 'react-toolbox/lib/button'
import * as buttons from '../buttons'
import {AdvanceButtonProps, ReverseButtonProps} from '../buttons'

export const AdvanceButton: StatelessComponent<ButtonProps & AdvanceButtonProps> = (props: any) =>
  <buttons.AdvanceButton component={Button} {...props} />

export const ReverseButton: StatelessComponent<ButtonProps & ReverseButtonProps> = (props: any) =>
  <buttons.ReverseButton component={Button} {...props} />
