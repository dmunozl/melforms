import {FormModifier} from "../formContext"
import {MelBlock, MelStepConfig} from "../types"

// Used by the Common renderer
export type RendererProps = {
    stepConfig: MelStepConfig
    block: MelBlock
}

// Used by renderers wrapped by Common
export type ExtendedRendererProps = RendererProps & {
    formModifier: FormModifier
}
