import './App.scss'
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import UsersPage from './pages/UsersPage';
import Header from './components/Header/Header';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
