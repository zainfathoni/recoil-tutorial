import { useSetRecoilState } from "recoil";
import { countState } from "./state";

export function CounterButtons() {
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}
