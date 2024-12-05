import axios from "axios"
import { Filters } from "@/types"

// ⚠️ Mock API base URL for testing purpose and its returning same data for all requests so eexpect filter & sort to not work.
const API_BASE_URL = "https://fakestoreapi.com"

export const fetchProducts = async (page: number, filters: Filters) => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { page, ...filters },
  })
  return response.data
}
