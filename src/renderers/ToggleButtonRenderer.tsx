import {Component, For} from "solid-js"
import {ToggleButtonGroup, ToggleButton} from "@suid/material"
import {ExtendedRendererProps} from "../types"

type ToggleButtonOptionsProps = {
    values: string[]
    labels?: string[]
    exclusive: boolean
}
export const ToggleButtonRenderer: Component<ExtendedRendererProps> = (props) => {
    const {block, stepConfig, formModifier} = props
    const {formState, updateValue} = formModifier

    const {values, labels} = block.options as ToggleButtonOptionsProps
    const value = () => formState()[stepConfig.id]?.[block.id]
    const handleChange = (_e:Event, v:string) => updateValue(stepConfig.id, block.id, v)

    return <ToggleButtonGroup value={value()} onChange={handleChange} exclusive>
        <For each={values}>
            {(value, i) => {
                return <ToggleButton value={value}>{labels ? labels[i()] : value}</ToggleButton>
            }}
        </For>
    </ToggleButtonGroup>
}