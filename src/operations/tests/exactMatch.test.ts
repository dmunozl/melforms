import { expect, test } from "vitest"
import {exactMatch} from "../exactMatch"
import {FormModifier} from "../../formContext"

test("Should match strings", () => {
    // As all operations on probably a bunch of other tests will need a form modifier
    // I will properly set up a fixture for it soonish
    const formModifier = {
        formState: () => {
            return {
                "mockStep": {
                    "mockBlock": "blockValue"
                }
            }
        }
    }
    const reference = {stepId:"mockStep", blockId:"mockBlock"}
    const expectedValue = "blockValue"

    expect(exactMatch(reference, formModifier as unknown as FormModifier, expectedValue)).toBe(true)
})