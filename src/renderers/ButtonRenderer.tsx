import {Component} from "solid-js"
import {Button} from "@suid/material"
import {RendererProps} from "../types"
import {FormModifierData, useForm} from "../formContext"

type ButtonOptionsProps = {
    label: string
}
export const ButtonRenderer: Component<RendererProps> = (props) => {
    const formData = useForm() as FormModifierData
    const {triggerFunctions} = formData
    const {block, stepConfig} = props
    const {label, ...options} = block.options as ButtonOptionsProps
    const handleClick = () => {
        if (!block.triggers) {
            console.log("No triggers set for this Button")
            return
        }

        for (const trigger of block.triggers) {
            if (trigger === "validate") {
                if(triggerFunctions.validate(stepConfig.id)){
                    break
                }
            }
            if (trigger === "navigateForward" && props.stepConfig.navigation) {
                triggerFunctions.navigateForward(props.stepConfig.navigation)
            }
        }

    }

    return <Button onClick={handleClick} {...options}>{label}</Button>
}