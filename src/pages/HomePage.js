import React from 'react'
import Layout from '../components/Layout/Layout'

const HomePage = () => {
  return (
    <Layout>
     <div id="container">
  <h1>Welcome to Watch World</h1>
  <section id="hero">
    <div id="hero-content">
      <h2>Discover the Perfect Timepiece</h2>
      <p>Explore our wide range of watches for every occasion.</p>
      <a href="/category" id="cta-button">Shop Now</a>
    </div>
  </section>
  <section id="featured-section">
    <h2>Featured Watches</h2>
    <div id="watch-card">
      <img src="/images/s1.png" alt="Watch 1" />
      <h3>Classic Chronograph</h3>
      <p>$199</p>
    </div>
    <div id="watch-card">
      <img src="/images/e3.png" alt="Watch 2" />
      <h3>Sport Dive Watch</h3>
      <p>$149</p>
    </div>
    <div id="watch-card">
      <img src="/images/s2.png" alt="Watch 3" />
      <h3>Luxury Automatic</h3>
      <p>$499</p>
    </div>
  </section>
</div>

    </Layout>
  )
}

export default HomePage
