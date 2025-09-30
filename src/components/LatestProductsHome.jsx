"use client";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Empty from "@/ui/Empty";
import { getProductsApi } from "@/services/productsService";
import Spinner from "@/ui/Loading";

function LatestProductsHome() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      const { products } = await getProductsApi();
      setProducts(products);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  return isLoading ? <Spinner /> : <ProductList products={products} />;
}

export default LatestProductsHome;
