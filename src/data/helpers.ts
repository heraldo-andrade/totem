import {
  juventudeData,
  infanciaData,
  adultaData,
  terceiraidadeData,
  MenuItem
} from "@/data/data";

interface SlugWithCategory {
  slug: string;
  mainCategory: string;
}

function extractSlugsWithCategory(data: MenuItem[], mainCategory: string): SlugWithCategory[] {
  return data.flatMap(menu =>
    menu.items.map(item => ({
      slug: item.slug,
      mainCategory
    }))
  );
}

export function getAllServiceSlugsWithCategory(): SlugWithCategory[] {
  return [
    ...extractSlugsWithCategory(juventudeData, 'juventude'),
    ...extractSlugsWithCategory(infanciaData, 'infancia'),
    ...extractSlugsWithCategory(adultaData, 'adulta'),
    ...extractSlugsWithCategory(terceiraidadeData, 'terceira-idade'),
  ];
}

export function getAllServiceSlugs(): string[] {
  return getAllServiceSlugsWithCategory().map(item => item.slug);
}
