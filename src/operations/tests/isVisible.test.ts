import { expect, describe, it } from "vitest"
import {isVisible} from "../isVisible"
import {setFormDisplay, setFormErrors} from "../../melStore"
import {mockFormDisplay, mockFormErrors} from "../../tests/fixtures"

describe("isVisible operation", () => {
    setFormDisplay(mockFormDisplay)
    setFormErrors(mockFormErrors)

    it("Should work", () => {
        const reference1 = {stepId:"mockStep", blockId:"stringBlock"}
        const reference2 = {stepId:"mockStep", blockId:"booleanBlock"}
        const reference3 = {stepId:"mockStep", blockId:"arrayBlock"}
        const reference4 = {stepId:"mockStep", blockId:"objectBlock"}

        expect(isVisible(reference1), "Display true and Error true").toBe(true)
        expect(isVisible(reference2), "Display true and Error false").toBe(true)
        expect(isVisible(reference3), "Display false and Error true").toBe(false)
        expect(isVisible(reference4), "Display false and Error false").toBe(false)
    })
})