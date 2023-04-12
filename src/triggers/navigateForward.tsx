import {currentStepId, form, history, setCurrentStepId, setHistory} from "../melStore"

export const navigateForward = () => {
    const navigationArray = form()?.steps[currentStepId()].navigation || []

    for(const nav of navigationArray){
        const stepId = nav.targetStepId
        const historyArray = history()
        let newHistory = [...historyArray, stepId]

        // If step was already visited, we assume we are jumping back!
        if(historyArray.includes(stepId)){
            const index = historyArray.findIndex((value) => value === stepId)
            newHistory = historyArray.slice(0, index+1)
        }

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