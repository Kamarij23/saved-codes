import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6 bg-black text-white">
      <h1 className="text-3xl font-bold">I am she she is I - Shop</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-gray-900 rounded-lg">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <button className="mt-2 bg-white text-black px-4 py-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
