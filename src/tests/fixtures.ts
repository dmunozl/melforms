// noinspection SpellCheckingInspection

import {FormModifier} from "../formContext"
import {MelForm} from "../types"

// I will update this fixture everytime I need parameters from formModifier for unit testing.
// Eventually I should have a full formModifier mock. In the meantime I will just cast the value.
export const formModifier:FormModifier = {
    formState: () => {
        return {
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
    },
    formDisplay: () => {
        return {
            "mockStep": {
                "stringBlock": true,
                "booleanBlock": true,
                "arrayBlock": false,
                "objectBlock": false
            }
        }
    },
    formErrors: () => {
        return {
            "mockStep": {
                "stringBlock": true,
                "booleanBlock": false,
                "arrayBlock": true,
                "objectBlock": false
            }
        }
    }
} as unknown as FormModifier

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