import {FormModifier} from "../formContext"
import {MelReference, MelValue} from "../types"

export type OperationFunction = (reference:MelReference, formModifier:FormModifier, expectedValue?:MelValue) => boolean
export type OperationDict = Record<string, OperationFunction>
