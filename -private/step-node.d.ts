import EmberObject from '@ember/object';
import { StepName, ActivationHook } from './types';
import StateMachine from './state-machine/-base';
export declare type PublicProperty = 'context' | 'onActivate' | 'onDeactivate';
export default class StepNode extends EmberObject {
    private sm;
    name: StepName;
    context: any;
    onActivate: ActivationHook;
    onDeactivate: ActivationHook;
    constructor(sm: StateMachine, name: StepName, context: any, onActivate: ActivationHook, onDeactivate: ActivationHook);
    readonly hasNext: boolean;
    readonly hasPrevious: boolean;
    readonly isActive: boolean;
}
