import {Component, For} from "solid-js";
import {ToggleButtonGroup, ToggleButton} from "@suid/material";
import {MelBlock} from "../types";
import {useForm} from "../formContext";

type ToggleButtonOptionsProps = {
    values: string[]
    labels?: string[]
    exclusive: boolean

}
export const ToggleButtonRenderer: Component<MelBlock & { stepId: string }> = (props) => {
    const {values, labels} = props.options as ToggleButtonOptionsProps
    // @ts-ignore
    const [formState, {updateValue}] = useForm()

    return <ToggleButtonGroup value={formState()[props.stepId]?.[props.id]} onChange={(e, v) => {
        updateValue(props.stepId, props.id, v)
    }} exclusive>
        <For each={values}>
            {(value, i) => {
                return <ToggleButton value={value}>{labels ? labels[i()] : value}</ToggleButton>
            }
            }
        </For>
    </ToggleButtonGroup>
}