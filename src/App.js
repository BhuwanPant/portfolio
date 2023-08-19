import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
   return (<>
         {/* <Navbar/>
         <Home/>
         <About/>
         <Skills/>
         <Work/>
        <Contact/> */}
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/"><Home/></Route> 
            <Route exact path="/about"><About/></Route> 
            <Route exact path="/skills"><Skills/></Route> 
            <Route exact path="/work"><Work /></Route> 
            <Route exact path="/contact"><Contact /></Route> 
          </Switch>
      </Router>
    </>
  );
}
export default App;
