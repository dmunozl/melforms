import {MelReference} from "../types"
import {formDisplay} from "../melStore"

export const isVisible = (reference:MelReference) => {
    return formDisplay()[reference.stepId]?.[reference.blockId]
}