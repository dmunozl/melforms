import {Component} from "solid-js"
import {MelForm} from "./types"
import {FormProvider} from "./formContext"
import {MelRenderer} from "./MelRenderer"
import {StateViewer} from "./StateViewer"

export const MelFormComponent:Component<{form:MelForm}> = (props) => {
    return <FormProvider formState={{}} currentStepId={props.form.firstStepId}>
        <MelRenderer form={props.form}/>
        <StateViewer/>
    </FormProvider>
}