// Types for form JSON definition
import {FormModifier} from "./formContext"

export type MelForm = {
    firstStepId: string
    steps: Record<string, MelStep>
    header?: MelHeader
}

export type MelHeader = {
    logo: string,
    class?: string
}

export type MelStepConfig = {
    id: string
    layout: MelLayout
    navigation?: MelNavigation[]
}

export type MelStep = MelStepConfig & {
    blocks: Record<string, MelBlock>
}

export type MelBlock = {
    id: string
    name: string
    type: string
    class?: string
    options?: Record<string, string | string[] | boolean>
    triggers?: MelTrigger[]
}

export type MelNavigation = {
    stepId: string
    type: "just go" | "check value"
    checkType?: "exact match" | "contains"
    checkKey?: [string, string]
    checkValue?: MelValue
}

export type MelTrigger = "validate" | "navigateForward" | "navigateBackward" | "submit" | "restart"

// Types for Layout management
export type MelLayout = MelColumn[]
export type MelColumn = {
    width: string
    blockIds: string[]
}

// Types for use on Components
export type RendererProps = {
    stepConfig: MelStepConfig
    block: MelBlock
}

// Types for form data handling
export type MelFormState = Record<string, MelStepState>
export type MelStepState = Record<string, MelValue>
export type MelValue = string | boolean | Record<string, string>

export type MelFormErrors = Record<string, MelStepErrors>
export type MelStepErrors = Record<string, boolean>

// Types for triggers
export type TriggerFunction = (formModifier:FormModifier) => boolean
export type TriggerDict = Record<string, TriggerFunction>