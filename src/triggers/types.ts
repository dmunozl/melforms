import {FormModifier} from "../formContext"

export type TriggerFunction = (formModifier:FormModifier) => boolean
export type TriggerDict = Record<string, TriggerFunction>
