import {history, setCurrentStepId, setHistory} from "../melStore"

export const navigateBackward = () => {
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