"use client"
import React, { useState, useEffect, useRef } from "react"
import { fetchProducts } from "../services/api"
import ProductCard from "../components/ProductCard"
import { Product, Filters } from "@/types"
import FilterBar from "@/components/FilterBar"

// HomePage component
const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState<Filters>({})
  const observerRef = useRef<IntersectionObserver | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  // Effect to load products when page or filters change
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      const newProducts = await fetchProducts(page, filters)
      setProducts((prev) => [...prev, ...newProducts])
      setLoading(false)
    }

    loadProducts()
  }, [page, filters])

  // Effect to set up IntersectionObserver for infinite scrolling
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1)
      }
    })

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current)
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [loading])

  // Handler to update filters and reset products and page
  const handleFilterChange = (newFilters: Filters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
    setPage(1)
    setProducts([])
  }

  return (
    <div className="container mx-auto p-4">
      <FilterBar onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {/* Sentinel element for IntersectionObserver */}
      <div ref={sentinelRef} className="h-1"></div>
    </div>
  )
}

export default HomePage
