//import style
import "./assets/css/main.css";

import { NavMenu } from "./components/nav_menu";
import { Redes } from "./components/redes";
import { About } from "./components/main_about";

function App() {
  return (
    <div className="App">
      <NavMenu />

      <Redes />

      <div className="main">
        <About />
      </div>

    </div>
  );
}

export default App
