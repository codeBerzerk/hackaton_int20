import { Link } from "react-router-dom"

export const RegisterBtn = () => {
    return(<Link to="/auth">
        <div className="registerBtn">
            Реєстрація
        </div>
    </Link>)
}