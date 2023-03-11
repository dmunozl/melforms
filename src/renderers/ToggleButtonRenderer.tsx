import {Component, For} from "solid-js";
import {ToggleButtonGroup, ToggleButton} from "@suid/material";
import {MelBlock, RendererProps} from "../types";
import {useForm} from "../formContext";

type ToggleButtonOptionsProps = {
    values: string[]
    labels?: string[]
    exclusive: boolean

}
export const ToggleButtonRenderer: Component<RendererProps> = (props) => {
    const formData = useForm()
    if(!formData) return null

    const {formState, updateValue} = formData
    const {block, stepConfig} = props
    const {values, labels} = block.options as ToggleButtonOptionsProps

    return <ToggleButtonGroup value={formState()[stepConfig.id]?.[block.id]} onChange={(e, v) => {
        updateValue(stepConfig.id, block.id, v)
    }} exclusive>
        <For each={values}>
            {(value, i) => {
                return <ToggleButton value={value}>{labels ? labels[i()] : value}</ToggleButton>
            }
            }
        </For>
    </ToggleButtonGroup>
}