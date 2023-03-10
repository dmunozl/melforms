import {createSignal, createContext, useContext, Component, JSX} from "solid-js";
import {MelForm, MelFormState, MelValue} from "./types";


type FormProviderProps = {
    formState: MelFormState
    children?: JSX.Element
}

const FormContext = createContext();
export const FormProvider:Component<FormProviderProps> = (props) => {
    const [formState, setFormState] = createSignal(props.formState)
    const formModifier = [
        formState,
        {
            updateValue(stepId: string, blockId:string, value:MelValue) {
                const newFormState = {...formState()}
                if (!newFormState[stepId]) {
                    newFormState[stepId] = {}
                }
                newFormState[stepId][blockId] = value
                setFormState(newFormState)
            },
        }
    ];

    return (
        <FormContext.Provider value={formModifier}>
            {props.children}
        </FormContext.Provider>
    );
}

export function useForm() { return useContext(FormContext); }