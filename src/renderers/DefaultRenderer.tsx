import {Component} from "solid-js";
import {MelBlock} from "../types";


export const DefaultRenderer:Component<MelBlock>= (props) => {
    const jsonBlock = JSON.stringify(props, null, 2)

    return <div>No renderer for block of type {props.type} with configuration <pre>{jsonBlock}</pre></div>
};