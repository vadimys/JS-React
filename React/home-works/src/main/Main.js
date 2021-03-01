import {Switch, Route} from "react-router-dom";
import Home from '../pages/components/Home'
import HW1 from '../pages/hw1/HW1'
import MainView from '../pages/components/MainView'

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/hw1' component={() => <HW1 firstName='Vadim' lastName='Zelinskyi'/>}/>
            <Route path='/hw2' component={() => <MainView name='hw2' pages='2'/>}/>
            <Route path='/hw3' component={() => <MainView name='hw3' pages='2'/>}/>
            <Route path='/hw4' component={() => <MainView name='hw4' pages='2'/>}/>
            <Route path='/hw5' component={() => <MainView name='hw5'/>}/>
        </Switch>
    );
}
