import React from 'react';
import "./Category.css"

const Category = () => {
  return (
      <div>
  <title>Watch Store - Categories</title>
  <h1>Watch Store - Categories</h1>
  <div className="category-container">
    <div className="category">
      <h2>Men's Watches</h2>
      <p>Shop our collection of men's watches.</p>
      <img
            src="/images/l3.png"
            alt="contactus"
            style={{ width: "32%" }}
          />
    </div>
    <div className="category">
      <h2>Women's Watches</h2>
      <p>Discover our stylish women's watches.</p>
      <img
            src="/images/l2.png"
            alt="contactus"
            style={{ width: "32%" }}
          />
    </div>
    <div className="category">
      <h2>Kids' Watches</h2>
      <p>Browse our fun and colorful kids' watches.</p>
      <img
            src="/images/e1.png"
            alt="contactus"
            style={{ width: "32%" }}
          />
    </div>
    <div className="category">
      <h2>Luxury Watches</h2>
      <p>Explore our premium selection of luxury watches.</p>
      <div className='content'>
      <img
            src="/images/m1.png"
            alt="contactus"
            style={{ width: "32%" } }
          />
          </div>
    </div>
  </div>
</div>
  )
}

export default Category
