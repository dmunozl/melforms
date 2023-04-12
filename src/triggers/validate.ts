import {TriggerFunction} from "./types"
import {currentStepId, formErrors, formDisplay, setShowErrors} from "../melStore"

export const validate:TriggerFunction = () => {
    let hasErrors = false

    const stepErrors = formErrors()[currentStepId()]
    const stepDisplay = formDisplay()[currentStepId()]
    for (const blockId in stepErrors) {
        // If block was hidden, ignore validation
        if(stepDisplay[blockId] !== undefined && !stepDisplay[blockId]){
            continue
        }
        if(stepErrors[blockId]){
            hasErrors = true
            break
        }
    }
    setShowErrors(hasErrors)
    return !hasErrors
}