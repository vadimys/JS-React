import {Provider} from 'react-redux';
import store from './store';
import View from './MainView'

const App = () =>
    <Provider store={store}>
        <View/>
    </Provider>


export default App;
