import {Component, Show} from "solid-js"
import {RendererProps} from "./types"
import {operationDict} from "../operations"
import {formDisplay, updateDisplay} from "../melStore"

export const withCommon = (Component: Component<RendererProps>) => {
    const WrappedRenderer: Component<RendererProps> = (props) => {
        const {block, stepConfig} = props
        const display = block.display

        const displayState = () => {
            // Always display if no display object was defined
            if(!display) {
                formDisplay()[stepConfig.id]?.[block.id] !== true && updateDisplay(stepConfig.id, block.id, true)
                return true
            }
            let shouldDisplay = true

            for (const operation of display){
                const operationFunction = operationDict[operation.function]
                if(!operationFunction(operation.reference, operation.expectedValue)){
                    shouldDisplay = false
                    break
                }
            }

            shouldDisplay !== formDisplay()[stepConfig.id]?.[block.id] && updateDisplay(stepConfig.id, block.id, shouldDisplay)

            return shouldDisplay
        }

        return <Show when={displayState()} keyed>
            <div class={`flex pl-4 pr-4 pt-4 ${block.class || "w-full"}`}>
                <Component {...props}/>
            </div>
        </Show>
    }
    return WrappedRenderer
}