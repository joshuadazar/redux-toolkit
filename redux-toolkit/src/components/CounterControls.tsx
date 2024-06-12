import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/slices/sliceCounter';

function CounterControls() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Disminuir</button>
    </div>
  );
}

export default CounterControls;