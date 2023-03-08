import type { Component } from 'solid-js';
import {MelRenderer} from "./MelRenderer";
import {MelForm} from "./types";

const testForm:MelForm = {
  steps: [{
    blocks: [{
      id: 'id',
      name: 'name',
      options: {
        label: 'Text field'
      },
      type: 'TextField'
    },{
      id: 'id',
      name: 'name',
      options: {
        label: 'Text field'
      },
      type: 'SingleSelect'
    }]
  }]
}
const App: Component = () => {
  return <MelRenderer form={testForm}/>
};

export default App;
