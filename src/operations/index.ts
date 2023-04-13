import {OperationDict} from "./types"
import {exactMatch} from "./exactMatch"
import {isValid} from "./isValid"
import {isVisible} from "./isVisible"

export const operationDict:OperationDict = {
    "exactMatch": exactMatch,
    "isValid": isValid,
    "isVisible": isVisible
}