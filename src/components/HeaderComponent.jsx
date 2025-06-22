import "./HeaderComponent.css";
import { Link } from "react-router-dom";
function HeaderComponent() {
    return (
       <header className="header">
        <h2 class="title">Notes App</h2>
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/" classname="link">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/notes" classname="link">
                    Notes
                    </Link>
                </li>
            </ul>
        </nav>
       </header>
    )
}

export default HeaderComponent