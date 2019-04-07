import Component from '@ember/component';
import { PublicProperty as PublicStepNodeProperty } from '../../-private/step-node';
import StateMachine from '../../-private/state-machine/-base';
import { StepName, ActivationHook } from '../../-private/types';
export default class StepComponent extends Component {
    layout: any;
    name: StepName;
    context: any;
    onActivate: ActivationHook;
    onDeactivate: ActivationHook;
    currentStep: StepName;
    transitions: StateMachine;
    'register-step': (stepComponent: StepComponent) => void;
    'remove-step': (stepComponent: StepComponent) => void;
    'update-step-node': (stepComponent: StepComponent, field: PublicStepNodeProperty, value: any) => void;
    init(): void;
    willDestroyElement(): void;
    private updateContext;
    private updateOnActivate;
    private updateOnDeactivate;
    /**
     * Whether this state is currently the active one
     * @property {boolean} isActive
     * @private
     */
    readonly isActive: boolean;
    readonly hasNext: boolean;
    readonly hasPrevious: boolean;
}
