import {FormModifier} from "./formContext"

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