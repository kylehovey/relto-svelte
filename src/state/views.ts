import {View} from "../types";
import {writable} from "svelte/store";

function createState() {
  const {subscribe, set} = writable<View>(View.Photos);

  return {
    subscribe,
    setView(view: View) {
      set(view);
    },
  };
}

export const currentView = createState();
