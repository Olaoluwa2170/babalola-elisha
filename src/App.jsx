import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Skills from "./components/skills"
import Work from "./components/Work"



function App() {
  

  return (
    

      <main className="bg-primary">
      <NavBar/>
      <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
      </main>
    
  )
}

export default App
