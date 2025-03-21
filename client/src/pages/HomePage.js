import React from 'react';
import './css/HomePage.css'; 

const cakes = [
  { id: 1, name: 'Tiramisu Cake', price: 20, rating: 4.5, image: '/images/tiramisu.jpeg' },
  { id: 2, name: 'Basque Cheesecake', price: 30, rating: 4.8, image: '/images/basqueChesscake.jpeg' },
  { id: 3, name: 'Crepe Cake', price: 40, rating: 4.7, image: '/images/crepeCake.jpeg' },
  { id: 4, name: 'Mousse Cake', price: 10, rating: 4.8, image: '/images/mousseCake.jpeg' },
];

const HomePage = () => {
  return (
    <div>
      
      <section className="hero-section">
        <h1>Welcome to MaoMao Cake!</h1>
        <p>Delicious cakes made with love!</p>
      </section>


      <section className="cakes-section">
        <h2>Signature Cakes</h2>
        <div className="cakes-container">
          {cakes.map(cake => (
            <div key={cake.id} className="cake-card">
              <img src={cake.image} alt={cake.name} className="cake-image" />
              <h3>{cake.name}</h3>
              <p>Price: ${cake.price}</p>
              <p>Rating: {cake.rating} ★</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;