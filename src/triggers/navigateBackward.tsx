import {FormModifier} from "../formContext"

export const navigateBackward = (formModifier:FormModifier) => {
    const {history, setHistory, setCurrentStepId} = formModifier

    if(history().length === 1) {
        return true
    }
    const newHistory = [...history()]
    newHistory.pop()
    const newStepId = newHistory[newHistory.length - 1]
    setCurrentStepId(newStepId)
    setHistory(newHistory)

    return true
}