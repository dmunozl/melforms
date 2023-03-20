import {FormModifier} from "../formContext"
import {TriggerFunction} from "../types"

export const validate:TriggerFunction = (formModifier:FormModifier) => {
    const {currentStepId, formErrors, formDisplay, setShowErrors} = formModifier

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