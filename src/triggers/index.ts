import {TriggerDict} from "../types"
import {FormModifier} from "../formContext"

import {validate} from "./validate"
import {navigateForward} from "./navigateForward"
import {navigateBackward} from "./navigateBackward"

export const triggerDict:TriggerDict = {
    validate: validate,
    navigateForward: navigateForward,
    navigateBackward: navigateBackward
}

export const applyTriggers = (triggerList:string[], formModifier:FormModifier) => {
    for(const trigger of triggerList){
        if(!triggerDict[trigger]){
            continue
        }
        const success = triggerDict[trigger](formModifier)
        if(!success) break
    }
}