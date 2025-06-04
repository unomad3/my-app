"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group h-full"
        >
          <div className="border overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                {product.title}
              </h3>

              <p className="text-xs text-gray-500 mb-2 capitalize">
                {product.category}
              </p>

              <div className="flex items-center justify-between mb-3 flex-1">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <button className="btn w-full text-sm mt-auto">
                View Details
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
