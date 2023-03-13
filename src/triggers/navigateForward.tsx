import {FormModifier} from "../formContext"

export const navigateForward = (formModifier:FormModifier) => {
    const {form, currentStepId, setCurrentStepId, history, setHistory} = formModifier
    const navigationArray = form.steps[currentStepId()].navigation || []

    for(const nav of navigationArray){
        const stepId = nav.stepId
        const newHistory = [...history(), stepId]
        if(nav.type === "just go"){
            setCurrentStepId(stepId)
            setHistory(newHistory)
            break
        } else {
            console.log("invalid navigation type")
        }
    }
    return true
}