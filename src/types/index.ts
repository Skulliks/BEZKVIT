export const LANG_STORAGE_KEY = "bezkvit-lang";

export interface ExpositionProps {
  id: number;
  previewName: string;
  title: string;
  date: string;
  genre: string;
  place: string;
  text: string;
  list: [string | null];
  "title-of-list_2": string;
  list_2: [string];
  srcVideo: string;
}
