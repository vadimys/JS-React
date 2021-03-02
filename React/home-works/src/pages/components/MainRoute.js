import {Route, Switch} from "react-router-dom";
import Work from './Work'

const MainRoute = ({name}) =>
    <Switch>
        <Route path={`/${name}/:id`} component={(props) =><Work {...props} name={name}/>}/>
    </Switch>;

export default MainRoute;
