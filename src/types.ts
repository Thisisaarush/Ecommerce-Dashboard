export interface Product {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  rating: {
    rate: number
    count: number
  }
}

export interface Filters {
  category?: string
  sort?: "price_asc" | "price_desc"
  [key: string]: string | number | boolean | undefined
}
