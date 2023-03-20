import {Component, Show} from "solid-js"
import {TextField} from "@suid/material"
import {RendererProps} from "../types"
import {FormModifier, useForm} from "../formContext"
import {operationDict} from "../operations"

type TextFieldOptionsProps = {
    required: boolean
}
export const TextFieldRenderer: Component<RendererProps> = (props) => {
    const formModifier = useForm() as FormModifier
    const {formState, formErrors, formDisplay, showErrors, updateError, updateValue, updateDisplay} = formModifier
    const {block, stepConfig} = props
    const options = block.options as TextFieldOptionsProps
    const display = block.display
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
    const displayState = () => {
        // Always display if no display object was defined
        if(!display) return true

        const operationFunction = operationDict[display.operation]
        const referencedValue = formState()[display.reference.stepId]?.[display.reference.blockId]
        const operationValue = display.value
        const shouldDisplay = operationFunction(referencedValue as never, operationValue as never)

        shouldDisplay !== formDisplay()[stepConfig.id]?.[block.id] && updateDisplay(stepConfig.id, block.id, shouldDisplay)

        return shouldDisplay
    }

    // Set initial error state
    return <Show when={displayState()}>
        <TextField {...options} onChange={handleChange} value={value()} error={errorState()}/>
    </Show>
}