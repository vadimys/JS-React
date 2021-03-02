import {Route, Switch} from "react-router-dom";
import Home from '../pages/components/Home'
import MainView from '../pages/components/MainView'

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/hw1' component={() => <MainView data={{name: 'hw1'}}/>}/>
            <Route path='/hw2' component={() => <MainView data={{name: 'hw2', pages: 2}}/>}/>
            <Route path='/hw3' component={() => <MainView data={{name: 'hw3', pages: 2}}/>}/>
            <Route path='/hw4' component={() => <MainView data={{name: 'hw4', pages: 2}}/>}/>
            <Route path='/hw5' component={() => <MainView data={{name: 'hw5'}}/>}/>
        </Switch>
    );
}
