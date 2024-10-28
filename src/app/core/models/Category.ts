export interface Category {
  category_id: number;
  category_title: string;
  is_enabled: boolean;
  created_at: string; // O number si es un timestamp
  updated_at: string;
  pages: number;
}
