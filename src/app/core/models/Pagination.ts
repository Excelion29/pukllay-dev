export interface Pagination {
  total: number;
  currentPage: number;
  totalPages: number;
  firstPage: string | null;
  previousPage: string | null;
  nextPage: string | null;
  lastPage: string | null;
  currentUrl: string;
}
