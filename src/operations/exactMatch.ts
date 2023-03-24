import {MelReference, MelValue} from "../types"
import {FormModifier} from "../formContext"

export const exactMatch = (reference:MelReference, formModifier: FormModifier, expectedValue?:MelValue) => {
    const {formState} = formModifier
    const value = formState()[reference.stepId]?.[reference.blockId]

    const matchType = typeof value
    if(matchType !== typeof expectedValue) return false

    if (matchType === "string") {
        return value === expectedValue
    }

    console.log(`No match implementation for type ${matchType}`)
    return false
}