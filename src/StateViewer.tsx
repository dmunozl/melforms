import {Component, createSignal} from "solid-js"
import KeyboardArrowLeftIcon from "@suid/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@suid/icons-material/KeyboardArrowRight"
import {Button} from "@suid/material"
import {formState, currentStepId, formErrors, formDisplay, history} from "./melStore"

export const StateViewer: Component = () => {
    const [expanded, setExpanded] = createSignal<boolean>(false)

    return <div class="fixed right-0 top-14 bg-gray-900 text-amber-50 h-full overflow-y-auto">
        <div class="flex h-full">
            <div class="h-full bg-gray-800">
                <Button size='small' class="flex h-full items-center" onClick={() => setExpanded(!expanded())}>
                    {expanded() ? <KeyboardArrowRightIcon/> : <KeyboardArrowLeftIcon/>}
                </Button>
            </div>
            {expanded() && <div class='p-6 w-96'>
                Step Data: <pre>{JSON.stringify(formState()[currentStepId()], null, 2)}</pre>
                <br/>
                StepErrors: <pre>{JSON.stringify(formErrors()[currentStepId()], null, 2)}</pre>
                <br/>
                StepDisplay: <pre>{JSON.stringify(formDisplay()[currentStepId()], null, 2)}</pre>
                <br/>
                History: <pre>{JSON.stringify(history(), null, 2)}</pre>
            </div>}
        </div>
    </div>
}