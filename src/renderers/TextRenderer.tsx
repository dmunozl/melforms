import {Component} from "solid-js"
import {Typography} from "@suid/material"
import {ExtendedRendererProps} from "../types"

type TextOptionsProps = {
    text: string
}
export const TextRenderer: Component<ExtendedRendererProps> = (props) => {
    const {block} = props
    const {text, ...options} = block.options as TextOptionsProps

    return <Typography {...options}>{text}</Typography>
}