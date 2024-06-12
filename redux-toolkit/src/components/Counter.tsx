
import { useSelector } from 'react-redux';
import store from '../store/store';

function Counter() {
  
  const count = useSelector((state: ReturnType<typeof store.getState>) => state.counter.count); // Access the count from the Redux store

  return (
    <div>
      <h1>Contador: {count}</h1>
    </div>
  );
}

export default Counter;