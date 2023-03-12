import {Component, For} from "solid-js";
import {useForm} from "./formContext";

export const StateViewer:Component = () => {
    const formData = useForm()
    if(!formData) return null

    const {formState, formErrors} = formData

    return <div class="fixed bottom-0 p-6 bg-gray-900 text-amber-50 w-full h-72 overflow-y-scroll">
        Data: <pre>{JSON.stringify(formState(), null, 2)}</pre>
        <br/>
        Errors: <pre>{JSON.stringify(formErrors(), null, 2)}</pre>
    </div>
}