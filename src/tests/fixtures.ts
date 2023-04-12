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
                },
                "button": {
                    id: "button",
                    name: "Button",
                    type: "Button",
                    triggers: [{
                        function: "spyBlock"
                    }],
                    options: {
                        label: "Spy Block"
                    }
                }
            },
            layout: [{
                width:"w-full",
                blockIds: [
                    "textfield", "button"
                ]
            }]
        }
    }
}