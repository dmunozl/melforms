import {FormModifier} from "../formContext"
import {TriggerFunction} from "../types"

export const validate:TriggerFunction = (formModifier:FormModifier) => {
    const {currentStepId, formErrors, setShowErrors} = formModifier

    let hasErrors = false
    const stepErrors = formErrors()[currentStepId()]
    for (const blockId in stepErrors) {
        if(stepErrors[blockId]){
            hasErrors = true
            break
        }
    }
    setShowErrors(hasErrors)
    return !hasErrors
}