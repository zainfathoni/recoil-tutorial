import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const doubleCountState = selector({
  key: "doubleCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});
