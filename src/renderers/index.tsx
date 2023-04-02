import {DefaultRenderer} from "./DefaultRenderer"
import {ButtonRenderer} from "./ButtonRenderer"
import {TextFieldRenderer} from "./TextFieldRenderer"
import {ToggleButtonRenderer} from "./ToggleButtonRenderer"
import {Component} from "solid-js"
import {RendererProps} from "./types"
import {TextRenderer} from "./TextRenderer"
import {withCommon} from "./withCommon"

export const renderersDict:Record<string, Component<RendererProps>> = {
    // When renderer not found fall back to this
    "Default": withCommon(DefaultRenderer),

    // Simple Form Renderers
    "TextField": withCommon(TextFieldRenderer),
    "ToggleButton": withCommon(ToggleButtonRenderer),

    // Non Data Renderer
    "Button": withCommon(ButtonRenderer),
    "Text": withCommon(TextRenderer)
}