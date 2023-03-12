import {Component} from "solid-js"
import {Button} from "@suid/material"
import {RendererProps} from "../types"
import {useForm} from "../formContext"

type ButtonOptionsProps = {
    label: string
}
export const ButtonRenderer: Component<RendererProps> = (props) => {
    const formData = useForm()
    if(!formData) return null

    const {formErrors, setShowErrors, performNavigation} = formData
    const {block, stepConfig} = props
    const {label, ...options} = block.options as ButtonOptionsProps
    const handleClick = () => {
        if (!block.triggers) {
            console.log("No triggers set for this Button")
            return
        }

        for (const trigger of block.triggers) {
            if (trigger === "validate") {
                let hasErrors = false
                const stepErrors = formErrors()[stepConfig.id]
                for (const blockId in stepErrors) {
                    if(stepErrors[blockId]){
                        hasErrors = true
                        break
                    }
                }
                setShowErrors(hasErrors)
                if (hasErrors) {
                    break
                }
            }
            if (trigger === "navigateForward" && props.stepConfig.navigation) {
                performNavigation(props.stepConfig.navigation)
            }
        }

    }

    return <Button onClick={handleClick} {...options}>{label}</Button>
}