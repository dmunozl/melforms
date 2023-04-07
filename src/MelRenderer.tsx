import {Component, For} from "solid-js"
import {RendererProps} from "./renderers/types"
import {FormModifier, useForm} from "./formContext"
import KeyboardArrowLeftIcon from "@suid/icons-material/KeyboardArrowLeft"
import {renderersDict} from "./renderers"
import {navigateBackward} from "./triggers/navigateBackward"
import {TriggerDict} from "./triggers/types"
import {registerTriggers} from "./triggers"

type MelRendererProps = {
    customTriggers?: TriggerDict
}

export const MelRenderer:Component<MelRendererProps> = (props) => {
    const formModifier = useForm() as FormModifier
    const {form, currentStepId} = formModifier
    const header = form.header
    const steps = form.steps
    const blocks = () => steps[currentStepId()].blocks
    const columns = () => steps[currentStepId()].layout
    const stepConfig = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {blocks, ...rest} = steps[currentStepId()]
        return rest
    }

    props.customTriggers && registerTriggers(props.customTriggers)

    return <>
        { header &&
            <div class="flex bg-gray-700 justify-between items-center h-14">
                <div class="text-white cursor-pointer p-4" onClick={() => navigateBackward(formModifier)}>
                    <KeyboardArrowLeftIcon/>
                </div>
                <img class={`p-3 max-h-full ${header.class || ""}`} src={`${header.logo}`} alt="logo"/>
                <div />
            </div>
        }
        <div class="flex flex-wrap w-2/3 mt-14 m-auto">
            <For each={columns()}>
                {(column) => {
                    return <div class={`flex flex-wrap ${column.width}`}>
                        <For each={column.blockIds}>
                            {(blockId) => {
                                const block = blocks()[blockId]
                                const RenderComponent = getComponent(block.type)

                                return <RenderComponent block={block} stepConfig={stepConfig()}/>
                            }}
                        </For>
                    </div>
                }}
            </For>
        </div>
    </>
}

const getComponent = (componentType: string):Component<RendererProps> => {
    return  renderersDict[componentType] || renderersDict["Default"]
}