import { useRecoilState } from "recoil";
import { countState } from "./state";

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
