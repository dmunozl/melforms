import {Component, createSignal, For} from "solid-js";
import {MelForm, RendererProps} from "./types";
import {TextFieldRenderer} from "./renderers/TextFieldRenderer";
import {DefaultRenderer} from "./renderers/DefaultRenderer";
import {ToggleButtonRenderer} from "./renderers/ToggleButtonRenderer";
import {useForm} from "./formContext";

import {ButtonRenderer} from "./renderers/ButtonRenderer";

export const MelRenderer:Component<{form:MelForm}> = (props) => {
    const formData = useForm()
    if(!formData) return null

    const {currentStepId} = formData
    const steps = props.form.steps
    const blocks = () => steps[currentStepId()].blocks
    const stepConfig = () => {
        const {blocks, ...rest} = steps[currentStepId()]
        return rest
    }

    return <div class="flex flex-col">
        <For each={blocks()}>
            {(block, i) => {
                const RenderComponent = getComponent(block.type)
                return <div class={`flex pl-4 pr-4 pt-4 ${block.class}`}>
                    <RenderComponent block={block} stepConfig={stepConfig()}/>
                </div>}
            }
        </For>
    </div>

}

const getComponent = (componentType: string):Component<RendererProps> => {
    switch (componentType) {
        case 'TextField':
            return TextFieldRenderer
        case 'ToggleButton':
            return ToggleButtonRenderer
        case 'Button':
            return ButtonRenderer
        default:
            return DefaultRenderer
    }
}