import { useRecoilValue } from "recoil";
import { countState } from "./state";

export function CounterDisplay() {
  const count = useRecoilValue(countState);

  return <div>Count: {count}</div>;
}
