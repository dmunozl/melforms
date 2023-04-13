import {TriggerFunction} from "./types"
import {currentStepId, setShowErrors, form} from "../melStore"
import {isValid} from "../operations/isValid"
import {isVisible} from "../operations/isVisible"

export const validate:TriggerFunction = () => {
    let hasErrors = false
    const blockIds = Object.keys(form()?.steps[currentStepId()].blocks || {})

    for (const blockId of blockIds) {
        const reference = {
            stepId: currentStepId(),
            blockId: blockId
        }
        if(!isValid(reference) && isVisible(reference)){
            hasErrors = true
            break
        }
    }
    setShowErrors(hasErrors)
    return !hasErrors
}