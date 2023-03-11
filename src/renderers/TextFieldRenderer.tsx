import {Component} from "solid-js";
import {TextField} from "@suid/material";
import {MelBlock, RendererProps} from "../types";
import {useForm} from "../formContext";

type TextFieldOptionsProps = {
    required: boolean
}
export const TextFieldRenderer: Component<RendererProps> = (props) => {
    const formData = useForm()
    if(!formData) return null

    const {formState, updateValue} = formData
    const {block, stepConfig} = props
    const options = block.options as TextFieldOptionsProps


    return <TextField {...options} onChange={(_e, v) => {
        updateValue(stepConfig.id, block.id, v)
    }} value={formState()[stepConfig.id]?.[block.id] || ''}/>
}