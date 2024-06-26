import type {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface Project {
  title: string;
  icon: IconDefinition;
  image: string;
  year: string;
  brief: string;
  description: string;
  link: string;
}

export enum View {
  Main = 'main',
  Project = 'project',
  Photos = 'photos',
}

export interface PortfolioPhoto {
  index: number;
  title: string;
  description: string;
}
