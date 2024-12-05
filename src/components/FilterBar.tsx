import React from "react"
import { Filters } from "@/types"

interface FilterBarProps {
  onFilterChange: (filters: Filters) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    onFilterChange({ [name]: value })
  }

  return (
    <div className="flex space-x-4 mb-4">
      <select
        name="category"
        onChange={handleFilterChange}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="clothing">Clothing</option>
      </select>
      <select
        name="sort"
        onChange={handleFilterChange}
        className="border p-2 rounded"
      >
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
    </div>
  )
}

export default FilterBar
