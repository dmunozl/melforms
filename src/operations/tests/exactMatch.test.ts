// noinspection DuplicatedCode

import { expect, describe, it } from "vitest"
import {exactMatch} from "../exactMatch"
import {formModifier as fm} from "../../tests/fixtures"

describe("exactMatch operation", () => {
    it("Should work with Strings", () => {
        const reference = {stepId:"mockStep", blockId:"stringBlock"}
        const correctValue = "blockValue"
        const wrongValue = "wrongValue"

        expect(exactMatch(reference, fm , correctValue), "Strings are equal").toBe(true)
        expect(exactMatch(reference, fm , wrongValue), "Strings are different").toBe(false)
    })

    it("Should work with Booleans", () => {
        const reference = {stepId:"mockStep", blockId:"booleanBlock"}
        const correctValue = true
        const wrongValue = false

        expect(exactMatch(reference, fm , correctValue), "Both booleans are true").toBe(true)
        expect(exactMatch(reference, fm , wrongValue), "One is true, one is false").toBe(false)
    })

    it("Should work with Arrays", () => {
        const reference = {stepId:"mockStep", blockId:"arrayBlock"}
        const correctValue = ["option1", "option2"]
        const wrongValue1 = ["option2", "option1"]
        const wrongValue2 = ["option1", "option3"]
        const wrongValue3 = ["option1", "option2", "option3"]

        expect(exactMatch(reference, fm , correctValue), "Same values, same order").toBe(true)
        expect(exactMatch(reference, fm , wrongValue1), "Same values, different order").toBe(false)
        expect(exactMatch(reference, fm , wrongValue2), "One different value").toBe(false)
        expect(exactMatch(reference, fm , wrongValue3), "One extra value").toBe(false)
    })

    it("Should work with Objects", () => {
        const reference = {stepId:"mockStep", blockId:"objectBlock"}
        const correctValue = {
            key1: "value1",
            key2: true,
            key3: ["option1", "option2"]
        }
        const wrongValue1 = {
            key1: "value2",
            key2: true,
            key3: ["option1", "option2"]
        }
        const wrongValue2 = {
            key1: "value1",
            key2: false,
            key3: ["option1", "option2"]
        }
        const wrongValue3 = {
            key1: "value1",
            key2: true,
            key3: ["option1", "option2", "option3"]
        }
        const wrongValue4 = {
            key4: "value1",
            key5: true,
            key6: ["option1", "option2", "option3"]
        }

        expect(exactMatch(reference, fm , correctValue), "Same keys, same values").toBe(true)
        expect(exactMatch(reference, fm , wrongValue1), "Same keys, different string value").toBe(false)
        expect(exactMatch(reference, fm , wrongValue2), "Same keys, different bool value").toBe(false)
        expect(exactMatch(reference, fm , wrongValue3), "Same keys, different array value").toBe(false)
        expect(exactMatch(reference, fm , wrongValue4), "Different keys, same values").toBe(false)
    })
})