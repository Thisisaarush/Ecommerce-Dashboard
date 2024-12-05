import React from "react"
import Image from "next/image"
import { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <Image
      src={product.image}
      alt={product.title}
      width={500}
      height={500}
      className="w-full h-48 object-cover rounded"
    />
    <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
    <p className="text-sm text-gray-500">{product.category}</p>
    <p className="text-xl font-bold mt-2">₹{product.price}</p>
  </div>
)

export default ProductCard
