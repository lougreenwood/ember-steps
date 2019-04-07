import EmberObject from '@ember/object';
import MutableArray from '@ember/array/mutable';
import { StepName, ActivationHook } from '../types';
import StepNode, { PublicProperty as PublicStepNodeProperty } from '../step-node';
import StepManager from '../../components/step-manager';
/**
 * Keeps track of the order of the steps in the step manager, as well as
 * the current step.
 *
 * @class BaseStateMachine
 * @private
 * @hide
 */
export default abstract class BaseStateMachine extends EmberObject {
    protected stepTransitions: MutableArray<StepNode>;
    /**
     * The step which the State Machine starts on.
     *
     * @type {StepName}
     * @memberof BaseStateMachine
     */
    initialStep: StepName;
    /**
     * The currently active step for the State Machine.
     *
     * @type {StepName}
     * @memberof BaseStateMachine
     */
    currentStep: StepName;
    length: number;
    firstStep: StepNode;
    readonly currentStepNode: StepNode | undefined;
    addStep(name: StepName, context: any, onActivate: ActivationHook, onDeactivate: ActivationHook, transitionTo: StepManager['transitionTo']): void;
    removeStep(name: StepName): void;
    updateStepNode(name: StepName, field: PublicStepNodeProperty, value: any): void;
    pickNext(_currentStep?: StepName): StepName | undefined;
    pickPrevious(_currentStep?: StepName): StepName | undefined;
    activate(step: StepNode | StepName): void;
}
