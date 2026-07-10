export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export type SortOption =
  | "count-asc"
  | "count-desc"
  | "rating-desc"
  | "rating-asc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "count-asc", label: "تعداد: کم به زیاد" },
  { value: "count-desc", label: "تعداد: زیاد به کم" },
  { value: "rating-desc", label: "رتبه: زیاد به کم" },
  { value: "rating-asc", label: "رتبه: کم به زیاد" },
];

export const DEFAULT_SORT: SortOption = "count-asc";

export function getSortChipLabel(sortBy: SortOption): string {
  return sortBy.startsWith("count") ? "تعداد" : "رتبه";
}
