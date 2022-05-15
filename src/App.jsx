import { SecondContextProvider } from "./context/SecondContext"

import { ExampleOne } from "./components/ExampleOne"
import { ExampleTwo } from "./components/ExampleTwo"

import "./App.css"

function App() {
   return (
      <div className="App">
         <ExampleOne />
         <SecondContextProvider>
            <ExampleTwo />
         </SecondContextProvider>
      </div>
   )
}

export default App
