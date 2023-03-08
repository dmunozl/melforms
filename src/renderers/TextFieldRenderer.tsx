import {Component} from "solid-js";
import {TextField} from "@suid/material";
import {MelBlock} from "../types";

type TextFieldOptionsProps = {
    required: boolean
    value: string
}
export const TextFieldRenderer:Component<MelBlock>= (props) => {
    const options = props.options as TextFieldOptionsProps

    return <TextField {...options}/>
};