// Types for form JSON definition
export type MelForm = {
    firstStepId: string
    steps: Record<string, MelStep>
}

export type MelStepConfig = {
    id: string
    navigation?: MelNavigation[]
}

export type MelStep = MelStepConfig & {
    blocks: MelBlock[]
}

export type MelBlock = {
    id: string
    name: string
    type: string
    class?: string
    options?: Record<string, string | string[] | boolean>
    trigger?: 'navigate'
}

export type RendererProps = {
    stepConfig: MelStepConfig
    block: MelBlock
}

export type MelNavigation = {
    stepId: string
    type: 'just go' | 'check value'
    checkType?: 'exact match' | 'contains'
    checkKey?: [string, string]
    checkValue?: MelValue
}

// Types for form data handling
export type MelFormState = Record<string, MelStepState>
export type MelStepState = Record<string, MelValue>
export type MelValue = string | boolean | Record<string, string>