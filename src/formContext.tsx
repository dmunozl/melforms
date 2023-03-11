import {createSignal, createContext, useContext, Component, JSX, Accessor} from "solid-js";
import {MelFormState, MelNavigation, MelValue} from "./types";


type FormProviderProps = {
    formState: MelFormState
    currentStepId: string
    children?: JSX.Element
}

type FormModifierData = {
    formState: Accessor<MelFormState>
    currentStepId: Accessor<string>
    updateValue: (stepId:string, blockId: string, value: MelValue) => void
    performNavigation: (navigationArray: MelNavigation[]) => void
}

const FormContext = createContext<FormModifierData>();
export const FormProvider:Component<FormProviderProps> = (props) => {
    const [formState, setFormState] = createSignal(props.formState)
    const [currentStepId, setCurrentStepId] = createSignal(props.currentStepId)

    const formModifier = {
        formState: formState,
        currentStepId: currentStepId,
        updateValue: (stepId: string, blockId:string, value:MelValue) => {
            const newFormState = {...formState()}
            if (!newFormState[stepId]) {
                newFormState[stepId] = {}
            }
            newFormState[stepId][blockId] = value
            setFormState(newFormState)
        },
        performNavigation: (navigationArray: MelNavigation[]) => {
            for(const nav of navigationArray){
                const stepId = nav.stepId
                if(nav.type === 'just go'){
                    setCurrentStepId(stepId)
                    break
                } else {
                    console.log('invalid navigation type')
                }
            }
        }
    };

    return (
        <FormContext.Provider value={formModifier}>
            {props.children}
        </FormContext.Provider>
    );
}

export function useForm() { return useContext(FormContext); }