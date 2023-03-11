import {Component} from "solid-js";
import {MelBlock, RendererProps} from "../types";


export const DefaultRenderer:Component<RendererProps>= (props) => {
    const {block} = props
    const jsonBlock = JSON.stringify(props, null, 2)

    return <div>No renderer for block of type {block.type} with configuration <pre>{jsonBlock}</pre></div>
};