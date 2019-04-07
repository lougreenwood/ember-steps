import Component from '@ember/component';
import BaseStateMachine from '../-private/state-machine/-base';
import { StepName } from '../-private/types';
import StepNode, { PublicProperty as PublicStepNodeProperty } from '../-private/step-node';
import StepComponent from './step-manager/step';
/**
 * A component for creating a set of "steps", where only one is visible at a time
 *
 * ```hbs
 * {{#step-manager as |w|}}
 *   {{#w.step}}
 *     The first step
 *   {{/w.step}}
 *
 *   {{#w.step}}
 *     The second step
 *   {{/w.step}}
 *
 *   <button {{action w.transition-to-next}}>
 *     Next Step
 *   </button>
 * {{/step-manager}}
 * ```
 *
 * @class StepManagerComponent
 * @yield {hash} w
 * @yield {Component} w.step Renders a step
 * @yield {Action} w.transition-to
 * @yield {Action} w.transition-to-next Render the next step
 * @yield {Action} w.transition-to-previous Render the previous step
 * @yield {StepName} w.currentStep The name of the current step
 * @yield {Array<String>} w.steps All of the step names that are currently defined, in order
 * @public
 * @hide
 */
export default class StepManagerComponent extends Component {
    layout: any;
    initialStep: StepName | undefined;
    /**
     * The `currentStep` property can be used for providing, the
     * name of the current step.
     *
     * NOTE: Since version 9.0, this is no longer 2-way bound property.
     *
     * To retrieve the currentStep (after initial render or transition), use the `onTransition` action:
     * ```hbs
     * {{#step-manager onTransition={{action (mut this.currentStep)}}as |w|}}
     *   {{#w.step}}
     *     The first step
     *   {{/w.step}}
     *
     *   {{#w.step}}
     *     The second step
     *   {{/w.step}}
     *
     *   <button {{action w.transition-to-next}}>
     *     Next Step
     *   </button>
     * {{/step-manager}}
     *
     * The currrent step is: {{this.currentStep}}
     * ```
     *
     * If provided, the initial step will come from the value of this property,
     * and the value will be updated whenever the step changes.
     */
    currentStep: StepName | undefined;
    /**
     * Holds the value passed to the `currentStep` setter.
     *
     * @private
     * @type {(StepName | undefined)}
     * @memberof StepManagerComponent
     */
    _currentStep: StepName | undefined;
    /**
     * Callback action to be triggered when the current step changes.
     */
    onTransition?: (name: StepName) => void;
    /**
     * @property {boolean} boolean
     * @public
     */
    linear: boolean;
    /**
     * @property {BaseStateMachine} transitions state machine for transitions
     * @private
     */
    transitions: BaseStateMachine;
    init(): void;
    readonly hasNextStep: boolean;
    readonly hasPreviousStep: boolean;
    registerStepComponent(stepComponent: StepComponent): void;
    removeStepComponent(stepComponent: StepComponent): void;
    updateStepNode(stepComponent: StepComponent, field: PublicStepNodeProperty, value: any): void;
    transitionTo(to: StepName | StepNode | void): void;
    transitionToNext(): void;
    transitionToPrevious(): void;
}
