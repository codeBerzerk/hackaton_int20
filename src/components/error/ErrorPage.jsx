import { Link } from "react-router-dom";
import "../../styles/_error.scss"
export default function ErrorPage(){
    return(
        <div className="error-container">
            <div className="error404">404 Page not found</div>
            <Link to={"/"}>Link to Home</Link>
        </div>)
}