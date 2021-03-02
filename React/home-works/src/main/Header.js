import constants from '../default/Constants'
import {NavLink} from "react-router-dom";
import homeWorks from '../pages/components/HomeWorks'

export default function Header() {
    return (
        <header>
            <nav>
                <ul style={{listStyleType: "none"}}>
                    <li><NavLink exact to={'/'} activeClassName="selected">{constants.MAIN}</NavLink></li>
                    {Object.entries(homeWorks).map((data, index) =>
                        <li key={index}><NavLink to={`/${data[0].toLowerCase()}`}
                                     activeClassName="selected">{index + 1}. {constants[data[0]]}</NavLink></li>
                    )}
                </ul>
            </nav>
            <hr/>
        </header>
    );
}
