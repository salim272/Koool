import { AxiosInstance } from 'axios';
import { API_ENDPOINTS } from './endpoints';
import {
  mapRawFeatureBrandsToFeatureBrands,
  FeaturedBrand,
  RawFeatureBrandsResponse,
} from './models/featuredBrands';

interface AuthRequest {
  loginId: string;
  loginType: string;
}

interface AuthResponse {
  status: {
    code: number;
    message: string;
  };
}

export interface FilteredItem {
  id: number;
  name: string;
}

export interface FilteredResponse {
  status: string;
  data: FilteredItem[];
}

/**
 *
 * @param Konnector
 * @param data
 * @returns
 */
export const authenticate = async (Konnector: AxiosInstance, data: AuthRequest): Promise<AuthResponse> => {
  try {
    const response = await Konnector.post<AuthResponse>(API_ENDPOINTS.authenticate, data);
    return response.data;
  } catch (error: any) {
    console.error("Authentication failed:", error);
    throw error;
  }
};

export const generateOtpForUser = async (Konnector: AxiosInstance, data: AuthRequest): Promise<AuthResponse> => {
  try {
    const response = await Konnector.post<AuthResponse>(API_ENDPOINTS.triggerOtpForUser, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getFeaturedBrands = async (
  Konnector: AxiosInstance
): Promise<FeaturedBrand[]> => {
  const endpoint = `${API_ENDPOINTS.getFeaturedBrands}`;

  try {
    const response = await Konnector.get<RawFeatureBrandsResponse>(endpoint);
    const featureBrands = mapRawFeatureBrandsToFeatureBrands(response.data.RESPONSE_BODY ?? []);

    return featureBrands;
  } catch (error: any) {
    console.log("GET Fetured Brands with path params failed: ", (error as Error).message);
    throw error;
  }
}
