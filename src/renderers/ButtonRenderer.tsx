import {Component} from "solid-js";
import {Button} from "@suid/material";
import {RendererProps} from "../types";
import {useForm} from "../formContext";

type ButtonOptionsProps = {
    label: string
}
export const ButtonRenderer: Component<RendererProps> = (props) => {
    const formData = useForm()
    if(!formData) return null

    const {performNavigation} = formData
    const {block} = props
    const {label, ...options} = block.options as ButtonOptionsProps
    const handleClick = () => {
        if (block.triggers === 'navigateForward' && props.stepConfig.navigation) {
            performNavigation(props.stepConfig.navigation)
        }
    }

    return <Button onClick={handleClick} {...options}>{label}</Button>
}