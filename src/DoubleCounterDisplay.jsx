import { useRecoilValue } from "recoil";
import { doubleCountState } from "./state";

export function DoubleCounterDisplay() {
  const doubleCount = useRecoilValue(doubleCountState);

  return <div>Double Count: {doubleCount}</div>;
}
