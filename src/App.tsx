import type {Component} from 'solid-js';
import {MelForm} from "./types";
import {MelFormComponent} from "./MelFormComponent";

const testForm: MelForm = {
    firstStepId: 'step1',
    steps: {
        'step1': {
            id: 'step1',
            navigation: [{
                type: 'just go',
                stepId: 'step2'
            }],
            blocks: [{
                id: 'block1',
                name: 'Block 1',
                type: 'ToggleButton',
                options: {
                    values: ['option1', 'option2', 'option3'],
                    labels: ['Option 1', 'Option 2', 'Option 3']
                }
            }, {
                id: 'block2',
                name: 'Block 2',
                type: 'TextField',
                options: {
                    label: 'Text field',
                    fullWidth: true
                 }
            }, {
                id: 'block3',
                name: 'Block 3',
                type: 'Button',
                class: 'justify-end',
                trigger: 'navigate',
                options: {
                    variant: 'contained',
                    label: 'Next'
                }
            }]
        },
        'step2': {
            id: 'step2',
            blocks: [{
                id: 'block4',
                name: 'Block 4',
                type: 'ToggleButton',
                options: {
                    values: ['option4', 'option5', 'option6'],
                    labels: ['Option 4', 'Option 5', 'Option 6']
                }
            }, {
                id: 'block5',
                name: 'Block 5',
                type: 'TextField',
                options: {
                    label: 'Text field 2',
                    fullWidth: true
                }
            }, {
                id: 'block6',
                name: 'Block 6',
                type: 'Button',
                class: 'justify-end',
                options: {
                    variant: 'contained',
                    label: 'Button'
                }
            }]
        }
    }
}
const App: Component = () => {
    return <MelFormComponent form={testForm}/>
};

export default App;
