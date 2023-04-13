// noinspection SpellCheckingInspection

import {describe, expect, it, vi} from "vitest"
import {fireEvent, render} from "@solidjs/testing-library"

import {
    textForm,
    buttonForm,
    textFieldForm,
    toggleButtonForm
} from "./fixtures"
import {TriggerDict} from "../triggers/types"
import {formErrors, formState} from "../melStore"
import {MelRenderer} from "../MelRenderer"

describe("Renderer Tests", () => {
    it("Should properly render Text", async () => {
        const {getByText} = await render(() =>
            <MelRenderer form={textForm}/>
        )
        const text = getByText("A test text")

        expect(text).toBeDefined()
    })

    it("Should properly render Button", async () => {
        const testTrigger = vi.fn()
        const customTriggers:TriggerDict = {
            testTrigger: testTrigger
        }
        const {getByText} = await render(() =>
            <MelRenderer form={buttonForm} customTriggers={customTriggers}/>
        )
        const button = getByText("Test")

        fireEvent.click(button)
        expect(testTrigger).toHaveBeenCalledTimes(1)
    })

    it("Should properly render TextField", async () => {
        const {getByTestId} = await render(() =>
            <MelRenderer form={textFieldForm}/>
        )
        const textField = getByTestId("textfield").children[1].children[0]

        expect(formState()["step"]?.["textfield"]).toEqual(undefined)
        expect(formErrors()["step"]?.["textfield"]).toEqual(true)
        fireEvent.input(textField, {target: {value: "Test Value"}})
        expect(formState()["step"]?.["textfield"]).toEqual("Test Value")
        expect(formErrors()["step"]?.["textfield"]).toEqual(false)
    })

    it("Should properly render toggle button", async () => {
        const {getByText} = await render(() =>
            <MelRenderer form={toggleButtonForm}/>
        )
        const option1 = getByText("Option 1")
        const option2 = getByText("Option 2")
        const option3 = getByText("Option 3")

        expect(formState()["step"]?.["toggleButton"]).toEqual(undefined)
        fireEvent.click(option1)
        expect(formState()["step"]?.["toggleButton"]).toEqual("option1")
        fireEvent.click(option2)
        expect(formState()["step"]?.["toggleButton"]).toEqual("option2")
        fireEvent.click(option3)
        expect(formState()["step"]?.["toggleButton"]).toEqual("option3")
    })
})
