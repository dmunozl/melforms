import {Component, For} from "solid-js"
import {MelForm, RendererProps} from "./types"
import {useForm} from "./formContext"
import {renderersDict} from "./renderers"

export const MelRenderer:Component<{form:MelForm}> = (props) => {
    const formData = useForm()
    if(!formData) return null

    const {currentStepId} = formData
    const header = props.form.header
    const steps = props.form.steps
    const blocks = () => steps[currentStepId()].blocks
    const columns = () => steps[currentStepId()].layout
    const stepConfig = () => {
        const {blocks, ...rest} = steps[currentStepId()]
        return rest
    }

    return <>
        { header && <div class="flex bg-gray-700 justify-between h-14">
            <div />
            <img class={`p-3 ${header.class || ""}`} src={`${header.logo}`} alt="logo"/>
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
                                return <div class={`flex pl-4 pr-4 pt-4 ${block.class || "w-full"}`}>
                                    <RenderComponent block={block} stepConfig={stepConfig()}/>
                                </div>}
                            }
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