// noinspection JSUnusedGlobalSymbols

import {createSignal, createContext, useContext, Component, JSX, Accessor, Setter} from "solid-js"
import {MelForm, MelFormBoolState, MelFormState, MelValue} from "./types"


type FormProviderProps = {
    form: MelForm
    formState: MelFormState
    currentStepId: string
    children?: JSX.Element
}

export type FormModifier = {
    form: MelForm
    formState: Accessor<MelFormState>
    formDisplay: Accessor<MelFormBoolState>
    currentStepId: Accessor<string>
    setCurrentStepId: Setter<string>
    formErrors: Accessor<MelFormBoolState>
    showErrors: Accessor<boolean>
    setShowErrors:Setter<boolean>
    updateValue: (stepId:string, blockId: string, value: MelValue) => void
    updateError: (stepId:string, blockId: string, hasErrors: boolean) => void
    updateDisplay: (stepId:string, blockId: string, shouldDisplay: boolean) => void
    history:Accessor<string[]>
    setHistory: Setter<string[]>
}

const FormContext = createContext<FormModifier>()
export const FormProvider:Component<FormProviderProps> = (props) => {
    const [formState, setFormState] = createSignal<MelFormState>(props.formState)
    const [formErrors, setFormErrors] = createSignal<MelFormBoolState>({})
    const [formDisplay, setFormDisplay] = createSignal<MelFormBoolState>({})
    const [showErrors, setShowErrors] = createSignal<boolean>(false)
    const [currentStepId, setCurrentStepId] = createSignal<string>(props.currentStepId)
    const [history, setHistory] = createSignal<string[]>([props.currentStepId])

    const formModifier = {
        form: props.form,
        // Form full state
        formState: formState,
        formErrors: formErrors,
        formDisplay: formDisplay,
        // Current step data
        currentStepId: currentStepId,
        setCurrentStepId: setCurrentStepId,
        showErrors: showErrors,
        setShowErrors: setShowErrors,
        // History Management
        history: history,
        setHistory: setHistory,
        // State Modifiers
        updateValue: (stepId: string, blockId:string, value:MelValue) => {
            const newFormState = {...formState()}
            if (!newFormState[stepId]) {
                newFormState[stepId] = {}
            }
            newFormState[stepId][blockId] = value
            setFormState(newFormState)
        },
        updateError: (stepId:string, blockId:string, hasErrors: boolean) => {
            const newFormErrors = {...formErrors()}
            if(!newFormErrors[stepId]){
                newFormErrors[stepId] = {}
            }
            newFormErrors[stepId][blockId] = hasErrors
            setFormErrors(newFormErrors)
        },
        updateDisplay: (stepId:string, blockId:string, shouldDisplay: boolean) => {
            const newFormDisplay = {...formDisplay()}
            if(!newFormDisplay[stepId]){
                newFormDisplay[stepId] = {}
            }
            newFormDisplay[stepId][blockId] = shouldDisplay
            setFormDisplay(newFormDisplay)
        }
    }

    return (
        <FormContext.Provider value={formModifier}>
            {props.children}
        </FormContext.Provider>
    )
}

export function useForm() { return useContext(FormContext) }