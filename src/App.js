import './App.sass';
import './CONSTS/consts.sass';
import Quiz from './Components/Quiz'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path={'/'} component={Quiz}/>
              </Switch>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
