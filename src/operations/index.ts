import {exactMatch} from "./exactMatch"
import {OperationDict} from "../types"
import {isValid} from "./isValid"

export const operationDict:OperationDict = {
    "exactMatch": exactMatch,
    "isValid": isValid
}
