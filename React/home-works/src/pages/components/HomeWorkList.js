import {NavLink} from "react-router-dom";
import constants from "../../default/Constants";

const List = ({name, pages}) =>
    <nav>
        <ol>
            {Array.from({length: parseInt(pages)}, (v, i) => i + 1).map((value) =>
                <li key={value}><NavLink exact={value === 1} to={`/${name}/${value}`}
                             activeClassName="selected">{constants[`${name.toUpperCase()}_${value}`]}</NavLink>
                </li>
            )}
        </ol>
    </nav>;

export default List;
