//import style
import "./assets/css/main.css";

import { NavMenu } from "./components/nav_menu";
import { Redes } from "./components/redes";
import { Wellcome } from "./components/main_wellcome";
import { About } from "./components/main_about";
import { Projects } from "./components/main_projects";
import { Effects } from "./components/effects";

function App() {
  return (
    <div className="App">
      
      <NavMenu />

      <Redes />

      <div className="main">

        <Wellcome />

        <About />

        <Projects />

        <Effects />

      </div>

    </div>
  );

}

export default App
