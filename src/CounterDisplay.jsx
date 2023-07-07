import { useRecoilValue } from "recoil";
import { countState } from "./state";

function Counter() {
  const count = useRecoilValue(countState);

  return <div>Count: {count}</div>;
}

export default Counter;
