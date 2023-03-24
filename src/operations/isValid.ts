import {MelReference} from "../types"
import {FormModifier} from "../formContext"

export const isValid = (reference:MelReference, formModifier: FormModifier) => {
    const {formErrors, formDisplay} = formModifier
    const hasErrors = formErrors()[reference.stepId]?.[reference.blockId]
    const displayState = formDisplay()[reference.stepId]?.[reference.blockId]

    // A value is considered valid if block is visible and does not have errors
    return displayState && !hasErrors
}