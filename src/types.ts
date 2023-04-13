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
    display?: MelOperation[]
}

export type MelNavigation = {
    targetStepId: string
    type: "just go" | "operation"
    operation?: MelOperation
}

export type MelTrigger = {
    function: "validate" | "navigateForward" | "navigateBackward" | "submit" | "restart" | string
}

export type MelOperation = {
    function: "exactMatch" | "contains" | "isValid" | "isVisible",
    reference: MelReference
    expectedValue?: MelValue
}

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

/* SUPPORTED VALUES */
export type MelSimpleValue = string | boolean
export type MelObjectValue = Record<string, MelSimpleValue>
export type MelArrayValue = MelSimpleValue[] | MelObjectValue[]
export type MelValue = MelSimpleValue | MelObjectValue | MelArrayValue

/* TYPES FOR DATA AND STATE HANDLING */
export type MelFormState = Record<string, MelStepState>
export type MelStepState = Record<string, MelValue | MelValue[]>
export type MelFormBoolState = Record<string, MelStepBoolState>
export type MelStepBoolState = Record<string, boolean>