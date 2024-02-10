import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Skills from "./components/skills"
import Work from "./components/Work"



function App() {
  

  return (
    
      <main className="h-screen overflow-hidden">
        <div className="h-[10%]"><NavBar/></div>
          <div className="h-[90%] customscroll overflow-auto">
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
          </div>
      </main>
    
  )
}

export default App
