// noinspection SpellCheckingInspection

import {MelForm} from "../types"

export const mockFormState = {
    "mockStep": {
        "stringBlock": "blockValue",
        "booleanBlock": true,
        "arrayBlock": ["option1", "option2"],
        "objectBlock": {
            key1: "value1",
            key2: true,
            key3: ["option1", "option2"]
        }
    }
}
export const mockFormDisplay = {
    "mockStep": {
        "stringBlock": true,
        "booleanBlock": true,
        "arrayBlock": false,
        "objectBlock": false
    }
}
export const mockFormErrors = {
    "mockStep": {
        "stringBlock": true,
        "booleanBlock": false,
        "arrayBlock": true,
        "objectBlock": false
    }
}

export const textForm: MelForm = {
    firstStepId: "step",
    steps: {
        "step": {
            id: "step",
            blocks: {
                "text": {
                    id: "text",
                    name: "Text",
                    type: "Text",
                    options: {
                        text: "A test text",
                        variant: "h4"
                    }
                },
            },
            layout: [{
                width:"w-full",
                blockIds: [
                    "text"
                ]
            }]
        }
    }
}
export const buttonForm: MelForm = {
    firstStepId: "step",
    steps: {
        "step": {
            id: "step",
            blocks: {
                "button": {
                    id: "button",
                    name: "Button",
                    type: "Button",
                    triggers: [{
                        function: "testTrigger"
                    }],
                    options: {
                        label: "Test"
                    }
                }
            },
            layout: [{
                width:"w-full",
                blockIds: [
                    "button"
                ]
            }]
        }
    }
}
export const textFieldForm: MelForm = {
    firstStepId: "step",
    steps: {
        "step": {
            id: "step",
            blocks: {
                "textfield": {
                    id: "textfield",
                    name: "Text field",
                    type: "TextField",
                    class: "w-full",
                    options: {
                        required: true,
                        label: "Text field",
                        fullWidth: true,
                        "data-testid": "textfield"
                    }
                }
            },
            layout: [{
                width:"w-full",
                blockIds: [
                    "textfield"
                ]
            }]
        }
    }
}
export const toggleButtonForm: MelForm = {
    firstStepId: "step",
    steps: {
        "step": {
            id: "step",
            blocks: {
                "toggleButton": {
                    id: "toggleButton",
                    name: "Toggle Button",
                    type: "ToggleButton",
                    options: {
                        values: ["option1", "option2", "option3"],
                        labels: ["Option 1", "Option 2", "Option 3"]
                    }
                },
            },
            layout: [{
                width:"w-full",
                blockIds: [
                    "toggleButton"
                ]
            }]
        }
    }
}