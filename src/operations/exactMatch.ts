import {MelArrayValue, MelCompValue, MelObjectValue, MelReference, MelValue} from "../types"
import {formState} from "../melStore"

export const exactMatch = (reference:MelReference, expectedValue?:MelValue) => {
    const simpleTypes = ["string", "boolean"]
    const value = formState()[reference.stepId]?.[reference.blockId]
    const matchType = typeof value

    if(matchType === "undefined")
        return false

    if (Array.isArray(value) || simpleTypes.includes(matchType)) {
        return exactMatchCompValues(value as MelCompValue, expectedValue as MelCompValue)
    }

    if (expectedValue && matchType === "object") {
        const valueKeys = Object.keys(value)
        const expectedKeys = Object.keys(expectedValue)

        if(valueKeys.length !== expectedKeys.length){
            return false
        }

        for(const key of valueKeys){
            if(!expectedKeys.includes(key)){
                return false
            }
            const v1 = (value as MelObjectValue)[key]
            const v2 = (expectedValue as MelObjectValue)[key]
            if(!exactMatchCompValues(v1, v2)){
                return false
            }
        }
        return true
    }

    console.warn(`No match implementation for type ${matchType}. Defaulting to false.`)
    return false
}

const exactMatchCompValues = (value1: MelCompValue, value2: MelCompValue) => {
    const matchType = typeof value1
    if(matchType !== typeof value2){
        return false
    }

    if (["string", "boolean"].includes(matchType)) {
        return value1 === value2
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
        if(value1.length !== value2.length){
            return false
        }
        return exactMatchArrays(value1, value2)
    }

    return false
}

const exactMatchArrays = (array1:MelArrayValue, array2:MelArrayValue) => {
    for(const idx in array1){
        if(array1[idx] !== array2[idx]){
            return false
        }
    }
    return true
}