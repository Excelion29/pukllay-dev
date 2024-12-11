import { data } from "jquery";
import { ApiResponse } from "./ApiResponse";
import { Pagination } from "./Pagination";



export interface Category {
  id: number;
  title: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CategoryRequest {
  category_id: number;
  category_title: string;
  categoryStatus: boolean;
  created_at: string; // O number si es un timestamp
  updated_at: string;
}

export interface CategoryResponse{
  categories: Category[];
  pagination: Pagination;
}

export interface CategoryApiResponse extends ApiResponse{
  data: CategoryResponse;
}

