import { Link } from "react-scroll";



export function NavMenu() {
  return (
    <div className='menu'>
      <div className="content_menu" id="menu">
            <menu>
              <Link activeClass="active" to="start" spy={true} smooth={false} offset={0} duration={500}>Welcome</Link>
              <Link activeClass="active" to="about" spy={true} smooth={false} offset={0} duration={500}>About</Link>
              <Link activeClass="active" to="skills" spy={true} smooth={false} offset={0} duration={500}>Skills</Link>
              <Link activeClass="active" to="works" spy={true} smooth={false} offset={0} duration={500}>Works</Link>
              <Link activeClass="active" to="formation" spy={true} smooth={false} offset={0} duration={500}>Formation</Link>
              <Link activeClass="active" to="contact" spy={true} smooth={false} offset={0} duration={500}>Contact</Link>
            </menu>
        </div>
        <button className="active_menu" onClick={activemenu}>
           {/* svg arrow down */}
          <span className="arrow_down">menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>
    </div>
  )
}




function activemenu() {
    let menu = document.getElementById('menu');
    menu!.classList.toggle('active');
}