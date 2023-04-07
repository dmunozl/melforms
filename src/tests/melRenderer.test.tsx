import { describe, it } from "vitest"
import { render } from "@solidjs/testing-library"

import {textFieldForm} from "./fixtures"
import {MelFormComponent} from "../MelFormComponent"

describe("Renderer Tests", () => {
    it("Should properly render TextField", async () => {
        await render(() => <MelFormComponent form={textFieldForm}/>)
    })
})
