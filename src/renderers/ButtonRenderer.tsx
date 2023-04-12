import {Component} from "solid-js"
import {Button} from "@suid/material"
import {applyTriggers} from "../triggers"
import {RendererProps} from "./types"

type ButtonOptionsProps = {
    label: string
}
export const ButtonRenderer: Component<RendererProps> = (props) => {
    const {block} = props
    const {label, ...options} = block.options as ButtonOptionsProps
    const handleClick = () => {
        if (!block.triggers) {
            console.log("No triggers set for this Button")
            return
        }
        applyTriggers(block.triggers)
    }

    return <Button onClick={handleClick} {...options}>{label}</Button>
}