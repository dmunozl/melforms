// noinspection JSUnusedGlobalSymbols

import {createSignal, createContext, useContext, Component, JSX, Accessor, Setter} from "solid-js"
import {MelFormErrors, MelFormState, MelNavigation, MelValue} from "./types"


type FormProviderProps = {
    formState: MelFormState
    currentStepId: string
    children?: JSX.Element
}

export type FormModifierData = {
    formState: Accessor<MelFormState>
    currentStepId: Accessor<string>
    formErrors: Accessor<MelFormErrors>
    showErrors: Accessor<boolean>
    updateValue: (stepId:string, blockId: string, value: MelValue) => void
    updateError: (stepId:string, blockId: string, hasErrors: boolean) => void
    history:Accessor<string[]>
    triggerFunctions: {
        validate: (stepId:string) => boolean
        navigateForward: (navigationArray: MelNavigation[]) => void
        navigateBackward: () => void
    }
}

const FormContext = createContext<FormModifierData>()
export const FormProvider:Component<FormProviderProps> = (props) => {
    const [formState, setFormState] = createSignal<MelFormState>(props.formState)
    const [formErrors, setFormErrors] = createSignal<MelFormErrors>({})
    const [showErrors, setShowErrors] = createSignal<boolean>(false)
    const [currentStepId, setCurrentStepId] = createSignal<string>(props.currentStepId)
    const [history, setHistory] = createSignal<string[]>([props.currentStepId])

    const formModifier = {
        formState: formState,
        currentStepId: currentStepId,
        formErrors: formErrors,
        showErrors: showErrors,
        history: history,
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
        triggerFunctions: {
            validate: (stepId: string) => {
                let hasErrors = false
                const stepErrors = formErrors()[stepId]
                for (const blockId in stepErrors) {
                    if(stepErrors[blockId]){
                        hasErrors = true
                        break
                    }
                }
                setShowErrors(hasErrors)
                return hasErrors
            },
            navigateForward: (navigationArray: MelNavigation[]) => {
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
            },
            navigateBackward: () => {
                if(history().length === 1) {
                    return
                }
                const newHistory = [...history()]
                newHistory.pop()
                const newStepId = newHistory[newHistory.length - 1]
                setCurrentStepId(newStepId)
                setHistory(newHistory)
            }
        },

    }

    return (
        <FormContext.Provider value={formModifier}>
            {props.children}
        </FormContext.Provider>
    )
}

export function useForm() { return useContext(FormContext) }