import {MelArrayValue, MelObjectValue, MelReference, MelValue} from "../types"
import {formState} from "../melStore"

export const exactMatch = (reference:MelReference, expectedValue?:MelValue) => {
    const value = formState()[reference.stepId]?.[reference.blockId]

    // If values are not of the same type, they are not comparable
    if(typeof value !== typeof expectedValue){
        return false
    }

    // This means reference is empty, then we return false
    if(typeof value === "undefined")
        return false

    // If simple, just return direct comparison
    if (typeof value === "string" || typeof value === "boolean") {
        return value === expectedValue
    }

    // If Array, call Array matcher function
    if (Array.isArray(value)) {
        return exactMatchArrays(value as MelArrayValue, expectedValue as MelArrayValue)
    }

    // If it's an object, it should only contain strings and booleans
    if (expectedValue && typeof value === "object") {
        return exactMatchObjects(value, expectedValue as MelObjectValue)
    }

    console.warn(`No match implementation for type ${typeof value}. Defaulting to false.`)
    return false
}

const exactMatchObjects = (value1: MelObjectValue, value2: MelObjectValue) => {
    const valueKeys = Object.keys(value1)
    const expectedKeys = Object.keys(value2)

    if(valueKeys.length !== expectedKeys.length){
        return false
    }

    for(const key of valueKeys){
        if(!expectedKeys.includes(key)){
            return false
        }
        const v1 = value1[key]
        const v2 = value2[key]
        if(v1 !== v2){
            return false
        }
    }
    return true
}

const exactMatchArrays = (array1:MelArrayValue, array2:MelArrayValue) => {
    if(array1.length !== array2.length) {
        return false
    }

    for(const idx in array1){
        const value1 = array1[idx]
        const value2 = array2[idx]
        if(
            typeof value1 === "object" &&
            typeof value2 === "object" &&
            !exactMatchObjects(value1, value2)
        ){
            return false
        }else if(value1 !== value2) {
            return false
        }
    }
    return true
}