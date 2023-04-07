import {TriggerDict} from "./types"
import {FormModifier} from "../formContext"

import {validate} from "./validate"
import {navigateForward} from "./navigateForward"
import {navigateBackward} from "./navigateBackward"
import {MelTrigger} from "../types"

export const triggerDict:TriggerDict = {
    validate: validate,
    navigateForward: navigateForward,
    navigateBackward: navigateBackward
}

export const registerTriggers = (customTriggers:TriggerDict) =>{
    const triggerNames = Object.keys(customTriggers)

    for(const triggerName of triggerNames) {
        triggerDict[triggerName] = customTriggers[triggerName]
    }
}

export const applyTriggers = (triggerList:MelTrigger[], formModifier:FormModifier) => {
    for(const trigger of triggerList){
        if(!triggerDict[trigger.function]){
            continue
        }
        const success = triggerDict[trigger.function](formModifier)
        if(!success) break
    }
}