import {DefaultRenderer} from "./DefaultRenderer";
import {ButtonRenderer} from "./ButtonRenderer";
import {TextFieldRenderer} from "./TextFieldRenderer";
import {ToggleButtonRenderer} from "./ToggleButtonRenderer";
import {Component} from "solid-js";
import {RendererProps} from "../types";
import {TextRenderer} from "./TextRenderer";

export const renderersDict:Record<string, Component<RendererProps>> = {
    // When renderer not found fall back to this
    'Default': DefaultRenderer,

    // Simple Form Renderers
    'TextField': TextFieldRenderer,
    'ToggleButton': ToggleButtonRenderer,

    // Non Data Renderer
    'Button': ButtonRenderer,
    'Text': TextRenderer
}