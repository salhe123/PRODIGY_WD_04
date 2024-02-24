import { Sidenav } from "./components/Sidenav"
import { Main } from "./components/main"
import Work from "./components/work"
import Project from "./components/project"
import Contact from "./components/Contact"

function App() {
  return ( 
    <div>
      <Sidenav />
      <Main/>
      <Work />
      <Project /> 
      <Contact />
    </div>
  )
}

export default App
