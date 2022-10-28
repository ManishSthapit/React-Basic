import logo from './logo.svg';
import './App.css';
import Myroutes from './Myroutes';
import {combineReducers, createStore} from 'redux';
import { Provider} from 'react-redux';
import itemReducer from './components/reducer/itemReducer';
import cartReducer from './components/reducer/cartReducer';

function App() {
  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
  })

  const mystore = createStore(rootReducer)


  return (
    <>
    <Provider store={mystore}>
    <Myroutes/>

    </Provider>
    </>
  );
}

export default App;
