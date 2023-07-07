import { useRecoilValue } from "recoil";
import { doubleCountState } from "./state";

function DoubleCounter() {
  const doubleCount = useRecoilValue(doubleCountState);

  return <div>Double Count: {doubleCount}</div>;
}

export default DoubleCounter;
