import {Component} from "solid-js"
import {Button} from "@suid/material"
import {ExtendedRendererProps} from "../types"
import {applyTriggers} from "../triggers"

type ButtonOptionsProps = {
    label: string
}
export const ButtonRenderer: Component<ExtendedRendererProps> = (props) => {
    const {block, formModifier} = props
    const {label, ...options} = block.options as ButtonOptionsProps
    const handleClick = () => {
        if (!block.triggers) {
            console.log("No triggers set for this Button")
            return
        }
        applyTriggers(block.triggers, formModifier)
    }

    return <Button onClick={handleClick} {...options}>{label}</Button>
}