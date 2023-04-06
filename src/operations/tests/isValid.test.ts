// noinspection DuplicatedCode

import { expect, describe, it } from "vitest"
import {isValid} from "../isValid"
import {formModifier as fm} from "../../fixtures"

describe("exactMatch operation", () => {
    // As this operator works on formError and formDisplay states
    // The output type of the block itself is irrelevant
    it("Should work", () => {
        const reference1 = {stepId:"mockStep", blockId:"stringBlock"}
        const reference2 = {stepId:"mockStep", blockId:"booleanBlock"}
        const reference3 = {stepId:"mockStep", blockId:"arrayBlock"}
        const reference4 = {stepId:"mockStep", blockId:"objectBlock"}

        expect(isValid(reference1, fm), "Display true and Error true").toBe(false)
        expect(isValid(reference2, fm), "Display true and Error false").toBe(true)
        expect(isValid(reference3, fm), "Display false and Error true").toBe(false)
        expect(isValid(reference4, fm), "Display false and Error false").toBe(false)
    })
})