import { Link } from "react-router-dom"

export const LoginBtn = () => {
    return(<Link to="/auth">
        <div className="loginBtn">
            Вхід
        </div>
    </Link>)
}