import { atom } from "recoil";

// function for the persist feature of app
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const cartState = atom({
  key: "cartState",
  default: [],
  // effects_UNSTABLE: [persistAtom],
  effects: [localStorageEffect()],
});
export default cartState;
