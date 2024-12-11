import { ApiResponse } from "./ApiResponse";
import { Pagination } from "./Pagination";

export interface Brand {
  id: number;
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface BrandRequest {
  brand_id: number;
  brand_name: string;
  brand_description: string;
  is_enabled: boolean;
  created_at: string; // O number si es un timestamp
  updated_at: string;
}

export interface BrandResponse{
  brands: Brand[];
  pagination: Pagination;
}

export interface BrandApiResponse extends ApiResponse{
  data: BrandResponse;
}
