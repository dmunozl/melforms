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
            blocks: {
                'title': {
                    id: 'title',
                    name: 'Title',
                    type: 'Text',
                    options: {
                        text: 'Step Title',
                        variant: 'h4'
                    }
                },
                'description': {
                    id: 'description',
                    name: 'Description',
                    type: 'Text',
                    options: {
                        text: 'This is a description of what the step is supposed to do.',
                        variant: 'body1'
                    }
                },
                'block1': {
                    id: 'block1',
                    name: 'Block 1',
                    type: 'ToggleButton',
                    options: {
                        values: ['option1', 'option2', 'option3'],
                        labels: ['Option 1', 'Option 2', 'Option 3']
                    }
                },
                'textfield1': {
                    id: 'textfield1',
                    name: 'Text field 1',
                    type: 'TextField',
                    class: 'w-1/2',
                    options: {
                        label: 'Text field 1',
                        fullWidth: true
                    }
                },
                'textfield2': {
                    id: 'textfield2',
                    name: 'Text field 2',
                    type: 'TextField',
                    class: 'w-1/2',
                    options: {
                        label: 'Text field 2',
                        fullWidth: true
                    }
                },
                'block3': {
                    id: 'block3',
                    name: 'Block 3',
                    type: 'Button',
                    class: 'justify-end',
                    triggers: 'navigateForward',
                    options: {
                        variant: 'contained',
                        label: 'Next'
                    }
                }
            },
            layout: [{
                width:'w-full',
                blockIds: [
                    'title', 'description', 'block1', 'textfield1', 'textfield2', 'block3'
                ]
            }]
        },
        'step2': {
            id: 'step2',
            blocks: {
                'block4': {
                    id: 'block4',
                    name: 'Block 4',
                    type: 'ToggleButton',
                    options: {
                        values: ['option4', 'option5', 'option6'],
                        labels: ['Option 4', 'Option 5', 'Option 6']
                    }
                },
                'block5': {
                    id: 'block5',
                    name: 'Block 5',
                    type: 'TextField',
                    options: {
                        label: 'Text field 2',
                        fullWidth: true
                    }
                },
                'block6': {
                    id: 'block6',
                    name: 'Block 6',
                    type: 'Button',
                    class: 'justify-end',
                    options: {
                        variant: 'contained',
                        label: 'Button'
                    }
                }
            },
            layout: [{
                width:'w-full',
                blockIds: [
                    'block4', 'block5', 'block6'
                ]
            }]
        }
    }
}
const App: Component = () => {
    return <MelFormComponent form={testForm}/>
};

export default App;
