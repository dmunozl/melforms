import {FormModifier} from "./formContext"

/* TYPES FOR FORM JSON DEFINITION */
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
    display?: MelDisplay
}

export type MelNavigation = {
    targetStepId: string
    type: "just go" | "check operation"
    reference?: MelReference
    operation?: MelOperation
    value?: MelValue
}

export type MelDisplay = {
    reference: MelReference
    operation: MelOperation
    value?: MelValue
}

export type MelTrigger = "validate" | "navigateForward" | "navigateBackward" | "submit" | "restart" | string

export type MelOperation = "exactMatch" | "contains" | "isValid"

export type MelReference = {
    stepId: string
    blockId:string
}

/* TYPES FOR LAYOUT MANAGEMENT */
export type MelLayout = MelColumn[]
export type MelColumn = {
    width: string
    blockIds: string[]
}

/* TYPES FOR USING ON RENDERERS */

// Used by the Common renderer
export type RendererProps = {
    stepConfig: MelStepConfig
    block: MelBlock
}
// Used by renderers wrapped by Common
export type ExtendedRendererProps = RendererProps & {
    formModifier: FormModifier
}

/* TYPES FOR DATA HANDLING */
export type MelFormState = Record<string, MelStepState>
export type MelStepState = Record<string, MelValue>
export type MelValue = string | boolean | Record<string, string>

export type MelFormErrors = Record<string, MelStepErrors>
export type MelStepErrors = Record<string, boolean>

/* TYPES FOR TRIGGERS (Will probably move to triggers folder) */
export type TriggerFunction = (formModifier:FormModifier) => boolean
export type TriggerDict = Record<string, TriggerFunction>

/* TYPES FOR OPERATION (Will probably move to operations folder) */
export type OperationFunction = (reference:MelReference, formModifier:FormModifier, expectedValue?:MelValue) => boolean
export type OperationDict = Record<string, OperationFunction>