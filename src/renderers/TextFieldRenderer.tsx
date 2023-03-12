import {Component} from "solid-js";
import {TextField} from "@suid/material";
import {RendererProps} from "../types";
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
    const value = () => formState()[stepConfig.id]?.[block.id] || ''
    const handleChange = (_e:Event, v:string) => updateValue(stepConfig.id, block.id, v)


    return <TextField {...options} onChange={handleChange} value={value()}/>
}