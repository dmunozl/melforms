import {Component} from "solid-js"
import {MelForm} from "./types"
import {FormProvider} from "./formContext"
import {MelRenderer} from "./MelRenderer"
import {StateViewer} from "./StateViewer"
import {TriggerDict} from "./triggers/types"

type MelFormComponentProps = {
    form: MelForm
    customTriggers?: TriggerDict
}
export const MelFormComponent:Component<MelFormComponentProps> = (props) => {

    return <FormProvider form={props.form} formState={{}} currentStepId={props.form.firstStepId}>
        <MelRenderer customTriggers={props.customTriggers}/>
        <StateViewer/>
    </FormProvider>
}