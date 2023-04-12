import { expect, describe, it } from "vitest"
import {isValid} from "../isValid"
import {setFormDisplay, setFormErrors} from "../../melStore"
import {mockFormDisplay, mockFormErrors} from "../../tests/fixtures"

describe("isValid operation", () => {
    setFormDisplay(mockFormDisplay)
    setFormErrors(mockFormErrors)

    it("Should work", () => {
        const reference1 = {stepId:"mockStep", blockId:"stringBlock"}
        const reference2 = {stepId:"mockStep", blockId:"booleanBlock"}
        const reference3 = {stepId:"mockStep", blockId:"arrayBlock"}
        const reference4 = {stepId:"mockStep", blockId:"objectBlock"}

        expect(isValid(reference1), "Display true and Error true").toBe(false)
        expect(isValid(reference2), "Display true and Error false").toBe(true)
        expect(isValid(reference3), "Display false and Error true").toBe(false)
        expect(isValid(reference4), "Display false and Error false").toBe(false)
    })
})