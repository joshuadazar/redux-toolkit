import './App.css'
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store/store';
import CounterControls from './components/CounterControls';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CounterControls />
    </Provider>
  );
}

export default App;
