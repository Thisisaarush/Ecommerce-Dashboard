import React from "react"
import Image from "next/image"
import { Product } from "@/types"

interface ProductModalProps {
  product: Product
  onClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded w-1/2">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={256}
        className="w-full h-64 object-cover mt-4"
      />
      <p className="mt-4">{product.description}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
)

export default ProductModal
