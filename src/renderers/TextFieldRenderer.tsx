import {Component} from "solid-js"
import {TextField} from "@suid/material"
import {RendererProps} from "./types"
import {formState, formErrors, showErrors, updateError, updateValue} from "../melStore"

type TextFieldOptionsProps = {
    required: boolean
}
export const TextFieldRenderer: Component<RendererProps> = (props) => {
    const {block, stepConfig} = props

    const options = block.options as TextFieldOptionsProps
    const value = () => formState()[stepConfig.id]?.[block.id] || ""
    const handleChange = (_e:Event, v:string) => updateValue(stepConfig.id, block.id, v)
    const errorState = () => {
        if(options.required) {
            const hasErrors = !value()
            hasErrors !== formErrors()[stepConfig.id]?.[block.id] && updateError(stepConfig.id, block.id, hasErrors)

            return showErrors() && hasErrors
        }
        return false
    }

    return <TextField {...options} onChange={handleChange} value={value()} error={errorState()}/>
}