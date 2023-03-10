import {Component, For} from "solid-js";
import {useForm} from "./formContext";

export const StateViewer:Component = () => {
    // @ts-ignore
    const [formState] = useForm()
    return <div class="fixed bottom-0 p-6 bg-gray-900 text-amber-50 w-full">
        <pre>{JSON.stringify(formState(), null, 2)}</pre>
    </div>
}