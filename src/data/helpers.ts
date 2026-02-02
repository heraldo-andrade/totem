import {
  juventudeData,
  infanciaData,
  adultaData,
  terceiraidadeData,
  MenuItem
} from "@/data/data";

function extractSlugs(data: MenuItem[]) {
  return data.flatMap(menu =>
    menu.items.map(item => item.slug)
  );
}

export function getAllServiceSlugs(): string[] {
  return [
    ...extractSlugs(juventudeData),
    ...extractSlugs(infanciaData),
    ...extractSlugs(adultaData),
    ...extractSlugs(terceiraidadeData),
  ];
}
