import type { Component } from 'solid-js';
import {MelRenderer} from "./MelRenderer";
import {MelForm} from "./types";

const testForm:MelForm = {
  steps: [{
    id: 'step1',
    blocks: [{
      id: 'id1',
      name: 'name',
      options: {
        values: ['option1', 'option2'],
        labels: ['Option 1', 'Option 2'],
        exclusive: true
      },
      type: 'ToggleButton'
    },{
      id: 'id2',
      name: 'name',
      options: {
        label: 'Text field',
        fullWidth: true
      },
      type: 'TextField'
    },]
  }]
}
const App: Component = () => {
  return <MelRenderer form={testForm}/>
};

export default App;
