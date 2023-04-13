import {MelReference} from "../types"
import {formErrors} from "../melStore"

export const isValid = (reference:MelReference) => {
    const hasErrors = formErrors()[reference.stepId]?.[reference.blockId]

    return !hasErrors
}