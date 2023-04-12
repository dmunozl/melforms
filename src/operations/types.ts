import {MelReference, MelValue} from "../types"

export type OperationFunction = (reference:MelReference, expectedValue?:MelValue) => boolean
export type OperationDict = Record<string, OperationFunction>
