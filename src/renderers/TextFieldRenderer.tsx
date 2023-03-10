import {Component} from "solid-js";
import {TextField} from "@suid/material";
import {MelBlock} from "../types";
import {useForm} from "../formContext";

type TextFieldOptionsProps = {
    required: boolean
}
export const TextFieldRenderer: Component<MelBlock & { stepId: string }> = (props) => {
    const options = props.options as TextFieldOptionsProps
    // @ts-ignore
    const [formState, {updateValue}] = useForm()

    return <TextField {...options} onChange={(_e, v) => {
        updateValue(props.stepId, props.id, v)
    }} value={formState()[props.stepId]?.[props.id]}/>
}