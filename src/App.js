import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducercomp';
import Getit from './getit';




function App() {


  const store = createStore(reducer)

  return (
    <Provider store={store}>
    <div className="App">
    <Getit/>
    </div>
    </Provider>
  );
}

export default App;
