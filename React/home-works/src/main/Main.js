import {Route, Switch} from "react-router-dom";
import Home from '../pages/components/Home'
import MainView from '../pages/components/MainView'
import homeWorks from "../pages/components/HomeWorks";

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            {Object.entries(homeWorks).map((data, index) => {
                const name = data[0].toLowerCase();
                const pages = Object.keys(data[1]).length;

                return <Route key={index} path={`/${name}`} component={() => <MainView data={{name, pages}}/>}/>
            })}
        </Switch>
    );
}
