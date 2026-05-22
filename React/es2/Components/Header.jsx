
import ReactLogo from "./react-logo.png"
export default function Header(){

    return(
    
    <header>

        <nav>
            <img src={ReactLogo} className="img-logo" alt="react logo"></img>
            <span className="title">ReactFacts</span>
        </nav>

    </header>

)

    
}