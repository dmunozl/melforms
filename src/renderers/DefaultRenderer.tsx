import {Component} from "solid-js"
import {ExtendedRendererProps} from "../types"

export const DefaultRenderer:Component<ExtendedRendererProps>= (props) => {
    const {block} = props
    const jsonBlock = JSON.stringify(block, null, 2)

    return <div>No renderer for block of type {block.type} with configuration <pre>{jsonBlock}</pre></div>
}