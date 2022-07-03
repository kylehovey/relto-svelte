import type { Project } from "../types";
import { writable } from "svelte/store";

function createState() {
  const { subscribe, set } = writable<Project | null>(null);

  return {
    subscribe,
    setProject(project: Project) {
      set(project);
    },
  };
}
export const selectedProject = createState();
