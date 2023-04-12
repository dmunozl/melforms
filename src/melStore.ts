import {createSignal} from "solid-js"
import {MelForm, MelFormBoolState, MelFormState, MelValue} from "./types"

export const [form, setForm] = createSignal<MelForm>()
export const [formState, setFormState] = createSignal<MelFormState>({})
export const [formErrors, setFormErrors] = createSignal<MelFormBoolState>({})
export const [formDisplay, setFormDisplay] = createSignal<MelFormBoolState>({})
export const [showErrors, setShowErrors] = createSignal<boolean>(false)
export const [currentStepId, setCurrentStepId] = createSignal<string>("")
export const [history, setHistory] = createSignal<string[]>([])
export const updateValue = (stepId: string, blockId:string, value:MelValue) => {
    const newFormState = {...formState()}
    if (!newFormState[stepId]) {
        newFormState[stepId] = {}
    }
    newFormState[stepId][blockId] = value
    setFormState(newFormState)
}
export const updateError = (stepId:string, blockId:string, hasErrors: boolean) => {
    const newFormErrors = {...formErrors()}
    if(!newFormErrors[stepId]){
        newFormErrors[stepId] = {}
    }
    newFormErrors[stepId][blockId] = hasErrors
    setFormErrors(newFormErrors)
}
export const updateDisplay = (stepId:string, blockId:string, shouldDisplay: boolean) => {
    const newFormDisplay = {...formDisplay()}
    if(!newFormDisplay[stepId]){
        newFormDisplay[stepId] = {}
    }
    newFormDisplay[stepId][blockId] = shouldDisplay
    setFormDisplay(newFormDisplay)
}