import { ProtecedRouter } from "../router/ProtectedRouter";
import { Logo } from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { Search } from "./Search";
import UnsignedButtons from "./UnsignedButtons";


export default function Navbar() {

    return(
        <nav className="navbar">  
            <Logo/>
            <span className="navbar__group">
                <Search/>
                <ProtecedRouter Element={ProfileIcon} Instead={UnsignedButtons}/>
            </span>
        </nav>
    )
}