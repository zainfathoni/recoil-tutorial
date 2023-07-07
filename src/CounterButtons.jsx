import { useSetRecoilState } from "recoil";
import { countState } from "./state";

function Counter() {
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <button onClick={(count) => setCount(count + 1)}>Increment</button>
      <button onClick={(count) => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
