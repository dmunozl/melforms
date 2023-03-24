import {Component, Show} from "solid-js"
import {ExtendedRendererProps, RendererProps} from "../types"
import {FormModifier, useForm} from "../formContext"
import {operationDict} from "../operations"

export const withCommon = (Component: Component<ExtendedRendererProps>) => {

    const WrappedRenderer: Component<RendererProps> = (props) => {
        const formModifier = useForm() as FormModifier
        const {formDisplay, updateDisplay} = formModifier
        const {block, stepConfig} = props
        const display = block.display

        const displayState = () => {
            // Always display if no display object was defined
            if(!display) {
                formDisplay()[stepConfig.id]?.[block.id] !== true && updateDisplay(stepConfig.id, block.id, true)
                return true
            }

            const operationFunction = operationDict[display.operation]
            const shouldDisplay = operationFunction(display.reference, formModifier, display.value)

            shouldDisplay !== formDisplay()[stepConfig.id]?.[block.id] && updateDisplay(stepConfig.id, block.id, shouldDisplay)

            return shouldDisplay
        }

        return <Show when={displayState()} keyed>
            <div class={`flex pl-4 pr-4 pt-4 ${block.class || "w-full"}`}>
                <Component {...props} formModifier={formModifier}/>
            </div>
        </Show>
    }
    return WrappedRenderer
}