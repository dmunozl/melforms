import {Component, createSignal, For} from "solid-js";
import {MelBlock, MelForm} from "./types";
import {TextFieldRenderer} from "./renderers/TextFieldRenderer";
import {DefaultRenderer} from "./renderers/DefaultRenderer";
import {ToggleButtonRenderer} from "./renderers/ToggleButtonRenderer";
import {FormProvider} from "./formContext";
import {StateViewer} from "./StateViewer";

export const MelRenderer:Component<{form:MelForm}> = (props) => {
    const steps = props.form.steps
    const [currentStepIndex, setCurrentStepIndex] = createSignal(0)
    const currentStep = steps[currentStepIndex()]

    return <FormProvider formState={{}}>
        <div class="flex flex-col">
            <For each={currentStep.blocks}>
                {(block, i) => {
                    const RenderComponent = getComponent(block.type)
                    return <div class="pl-4 pr-4 pt-4">
                        <RenderComponent {...block} stepId={currentStep.id}/>
                    </div>}
                }
            </For>
        </div>
        <StateViewer/>
    </FormProvider>
}

const getComponent = (componentType: string):Component<MelBlock & {stepId:string}> => {
    switch (componentType) {
        case 'TextField':
            return TextFieldRenderer
        case 'ToggleButton':
            return ToggleButtonRenderer
        default:
            return DefaultRenderer
    }
}