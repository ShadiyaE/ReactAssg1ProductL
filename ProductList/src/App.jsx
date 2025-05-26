import React, { useState } from 'react';
import { products as productData } from './data/products';
import ProductCard from './components/ProductsCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('');
  const [products] = useState(productData);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSort = (e) => setSort(e.target.value);
  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => category === 'All' || product.category === category)
    .sort((a, b) => {
      if (sort === 'priceAsc') return a.price - b.price;
      if (sort === 'priceDesc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const uniqueCategories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Product Listing</h2>
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Search products..."
            className="form-control"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select className="form-select" value={category} onChange={handleCategory}>
            {uniqueCategories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <select className="form-select" value={sort} onChange={handleSort}>
            <option value="">Sort By</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
