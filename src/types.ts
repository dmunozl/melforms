export type MelForm = {
    steps: MelStep[]
}

export type MelStep = {
    blocks: MelBlock[]
}

export type MelBlock = {
    id: string
    name: string
    type: 'TextField' | 'SingleSelect'
    options?: Record<string, string | boolean>
}