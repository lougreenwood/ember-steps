import BaseStateMachine from './-base';
/**
 * Keeps track of the order of the steps in the step manager, as well as
 * the current step.
 *
 * @class CircularStateMachine
 * @extends BaseStateMachine
 * @private
 * @hide
 */
export default class CircularStateMachine extends BaseStateMachine {
    pickNext(currentStep?: import("../types").StepName): string | number | Symbol | undefined;
    pickPrevious(currentStep?: import("../types").StepName): string | number | Symbol | undefined;
}
