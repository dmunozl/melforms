import {Component} from "solid-js"
import {MelForm} from "./types"
import {FormProvider} from "./formContext"
import {MelRenderer} from "./MelRenderer"
import {StateViewer} from "./StateViewer"

export const MelFormComponent:Component<{form:MelForm}> = (props) => {

    return <FormProvider form={props.form} formState={{}} currentStepId={props.form.firstStepId}>
        <MelRenderer/>
        <StateViewer/>
    </FormProvider>
}