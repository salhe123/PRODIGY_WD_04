import { Sidenav } from "./components/Sidenav"
import { Main } from "./components/main"
import Work from "./components/work"
import Project from "./components/project"

function App() {
  return ( 
    <div>
      <Sidenav />
      <Main/>
      <Work />
      <Project /> 
    </div>
  )
}

export default App
