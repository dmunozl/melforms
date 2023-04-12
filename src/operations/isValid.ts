import {MelReference} from "../types"
import {formDisplay, formErrors} from "../melStore"

export const isValid = (reference:MelReference) => {
    const hasErrors = formErrors()[reference.stepId]?.[reference.blockId]
    const displayState = formDisplay()[reference.stepId]?.[reference.blockId]

    // A value is considered valid if block is visible and does not have errors
    return displayState && !hasErrors
}