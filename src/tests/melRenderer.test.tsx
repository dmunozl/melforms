// noinspection SpellCheckingInspection

import {describe, expect, it, vi} from "vitest"
import {fireEvent, render} from "@solidjs/testing-library"

import {textFieldForm} from "./fixtures"
import {TriggerFunction} from "../triggers/types"
import {MelValue} from "../types"
import {formDisplay, formErrors, formState} from "../melStore"
import {MelRenderer} from "../MelRenderer"

type SingleBlockData = {
    value: MelValue | MelValue[],
    hasError: boolean,
    display: boolean
}
const getBlockDataFunction = (
    stepId: string,
    blockId: string,
    callback: (data: SingleBlockData) => SingleBlockData
) => {
    const returnFunction: TriggerFunction = () => {
        const blockData: SingleBlockData = {
            value: formState()[stepId]?.[blockId],
            hasError: formErrors()[stepId]?.[blockId],
            display: formDisplay()[stepId]?.[blockId]
        }
        callback(blockData)
        return true
    }

    return returnFunction
}
describe("Renderer Tests", () => {
    it("Should properly render TextField", async () => {
        const dataFunction = vi.fn((data) => data)
        const getDataTrigger = getBlockDataFunction("step", "textfield", dataFunction)
        const customTriggers = {
            spyBlock: getDataTrigger
        }
        const {getByText, getByTestId} = await render(() =>
            <MelRenderer form={textFieldForm} customTriggers={customTriggers}/>
        )
        const button = getByText("Spy Block")
        const textField = getByTestId("textfield").children[1].children[0]

        fireEvent.click(button)
        fireEvent.input(textField, {target: {value: "Test Value"}})
        fireEvent.click(button)
        expect(dataFunction).toHaveBeenCalledTimes(2)

        const results: SingleBlockData[] = dataFunction.mock.results.map((result) => result.value)
        expect(results[0].value).toEqual(undefined)
        expect(results[0].hasError).toEqual(true)
        expect(results[1].value).toEqual("Test Value")
        expect(results[1].hasError).toEqual(false)
    })
})
