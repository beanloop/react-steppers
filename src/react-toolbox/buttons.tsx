import * as React from 'react'
import {StatelessComponent} from 'react'
import {Button, ButtonProps} from 'react-toolbox/lib/button'
import * as buttons from '../buttons'
import {AdvanceButtonProps, ReverseButtonProps} from '../buttons'

/**
 * Renders a react-toolbox Button to go to the next step
 *
 * This is just a wrapper around the basic [AdvanceButton](/#/docs/dist/src/buttons.js/component.AdvanceButton)
 * but with Button from react-toolbox passed in the component property.
 *
 * ### Usage
 * ```
 * <AdvanceButton>
 *   Next
 * </AdvanceButton>
 * ```
 */
export const AdvanceButton: StatelessComponent<AdvanceButtonProps & ButtonProps> = (props: any) =>
  <buttons.AdvanceButton component={Button} {...props} />

/**
 * Renders a react-toolbox Button to go to the previous step
 *
 * This is just a wrapper around the basic [ReverseButton](/#/docs/dist/src/buttons.js/component.ReverseButton)
 * but with Button from react-toolbox passed in the component property.
 *
 * ### Usage
 * ```
 * <ReverseButton>
 *   Back
 * </ReverseButton>
 * ```
 */
export const ReverseButton: StatelessComponent<ReverseButtonProps & ButtonProps> = (props: any) =>
  <buttons.ReverseButton component={Button} {...props} />
