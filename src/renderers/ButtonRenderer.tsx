import {Component} from "solid-js"
import {Button} from "@suid/material"
import {RendererProps} from "../types"
import {FormModifier, useForm} from "../formContext"
import {applyTriggers} from "../triggers"

type ButtonOptionsProps = {
    label: string
}
export const ButtonRenderer: Component<RendererProps> = (props) => {
    const formModifier = useForm() as FormModifier
    const {block} = props
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