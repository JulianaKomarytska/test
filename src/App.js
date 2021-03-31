import './App.sass';
import './CONSTS/consts.sass';
import Quiz from './Components/Quiz'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk))

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
