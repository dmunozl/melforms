import {Component, createSignal, For} from "solid-js";
import {MelBlock, MelForm} from "./types";
import {TextFieldRenderer} from "./renderers/TextFieldRenderer";
import {DefaultRenderer} from "./renderers/DefaultRenderer";

export const MelRenderer:Component<{form:MelForm}> = (props) => {
    const steps = props.form.steps
    const [currentStepIndex, setCurrentStepIndex] = createSignal(0)
    const currentStep = steps[currentStepIndex()]

    return <For each={currentStep.blocks}>
        {(block, i) => {
            const RenderComponent = getComponent(block.type)
            return <RenderComponent {...block}/>}
        }
    </For>
}

const getComponent = (componentType: string):Component<MelBlock> => {
    switch (componentType) {
        case 'TextField':
            return TextFieldRenderer
        default:
            return DefaultRenderer
    }
}