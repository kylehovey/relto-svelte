import type {PortfolioPhoto} from "src/types";

export const urlsFor = (photo?: PortfolioPhoto): {thumbnail: string, full: string} | null => {
  if (!photo) return null;

  const suffix = photo.index.toString().padStart(2, "0");
  const path = 'images/photo_portfolio/';

  return {
    thumbnail: `${path}/thumbnail/Portfolio_Thumbnail-${suffix}.jpg`,
    full: `${path}/full_size/Portfolio-${suffix}.jpg`,
  }
};
