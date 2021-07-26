import "./topbar.scss";
import {Person , Mail} from '@material-ui/icons';
export default function Topbar(props) {
  return (
    <div className={"topbar " + (props.menuOpen && "active")}>

      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Genius.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+216 41 555 865</span>

          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>meriembenismail867@gmail.com</span>

          </div>
          
        </div>
        <div className="right">

          <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          

        </div>
      </div>
      
    </div>
  )
}
