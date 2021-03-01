import {Route, Switch} from "react-router-dom";
import HomeWork from './HomeWorkById'

const MainRoute = ({name}) =>
    <Switch>
        <Route path={`/${name}/:id`} component={(props) =><HomeWork {...props} name={name}/>}/>
    </Switch>;

export default MainRoute;
