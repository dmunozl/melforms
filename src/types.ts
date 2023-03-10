// Types for form JSON definition
export type MelForm = {
    steps: MelStep[]
}

export type MelStep = {
    id:string
    blocks: MelBlock[]
}

export type MelBlock = {
    id: string
    name: string
    type: string
    options?: Record<string, string | string[] | boolean>
}

// Types for form data handling
export type MelFormState = Record<string, MelStepState>
export type MelStepState = Record<string, MelValue>
export type MelValue = string | boolean | Record<string, string>