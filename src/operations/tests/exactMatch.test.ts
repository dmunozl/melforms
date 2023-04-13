// noinspection DuplicatedCode

import { expect, describe, it } from "vitest"
import {exactMatch} from "../exactMatch"
import {setFormState} from "../../melStore"
import {mockFormState} from "../../tests/fixtures"

describe("exactMatch operation", () => {
    setFormState(mockFormState)

    it("Should work with Strings", () => {
        const reference = {stepId:"mockStep", blockId:"stringBlock"}
        const correctValue = "blockValue"
        const wrongValue = "wrongValue"

        expect(exactMatch(reference, correctValue), "Strings are equal").toBe(true)
        expect(exactMatch(reference, wrongValue), "Strings are different").toBe(false)
    })

    it("Should work with Booleans", () => {
        const reference = {stepId:"mockStep", blockId:"booleanBlock"}
        const correctValue = true
        const wrongValue = false

        expect(exactMatch(reference, correctValue), "Both booleans are true").toBe(true)
        expect(exactMatch(reference, wrongValue), "One is true, one is false").toBe(false)
    })

    it("Should work with Arrays", () => {
        const reference = {stepId:"mockStep", blockId:"arrayBlock"}
        const correctValue = ["option1", "option2"]
        const wrongValue1 = ["option2", "option1"]
        const wrongValue2 = ["option1", "option3"]
        const wrongValue3 = ["option1", "option2", "option3"]

        expect(exactMatch(reference, correctValue), "Same values, same order").toBe(true)
        expect(exactMatch(reference, wrongValue1), "Same values, different order").toBe(false)
        expect(exactMatch(reference, wrongValue2), "One different value").toBe(false)
        expect(exactMatch(reference, wrongValue3), "One extra value").toBe(false)
    })

    it("Should work with Objects", () => {
        const reference = {stepId:"mockStep", blockId:"objectBlock"}
        const correctValue = {
            key1: "value1",
            key2: true,
        }
        const wrongValue1 = {
            key1: "value2",
            key2: true,
        }
        const wrongValue2 = {
            key1: "value1",
            key2: false,
        }
        const wrongValue3 = {
            key4: "value1",
            key5: true,
        }

        expect(exactMatch(reference, correctValue), "Same keys, same values").toBe(true)
        expect(exactMatch(reference, wrongValue1), "Same keys, different string value").toBe(false)
        expect(exactMatch(reference, wrongValue2), "Same keys, different bool value").toBe(false)
        expect(exactMatch(reference, wrongValue3), "Different keys, same values").toBe(false)
    })
})