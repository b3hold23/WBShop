import React, {useState} from 'react';   
import windBreaker from './productData';
import { pixelSim } from './pixel'; 
import './assets/App.css'

function App() {
  const [selectedVariant, setSelectedVariant] = useState(windBreaker.variants[0]);
  const [message, setMessage] = useState("");

  const handleVariantChange = (e) => {
    const variant = windBreaker.variants.find(v => v.id === e.target.value);
    setSelectedVariant(variant);
    setMessage("");
  };

  const addToCart = () => {
    if (!selectedVariant.inStock) {
      setMessage("Currently out of stock.");
      return;
    }

    pixelSim(addToCart, {
      product: windBreaker.title,
      variant: selectedVariant.label,
      price: selectedVariant.price
    });

    setMessage(`✅ Added ${windBreaker.title} (${selectedVariant.label}) to cart!`);

  };

  return (
    <>
      <div className="productPage">
        <h1>{windBreaker.title}</h1>
        <img src={windBreaker.image} alt={windBreaker.title} />
        <p>{windBreaker.description}</p>

        <div className="productVariant">
          <label htmlFor="variantSelect">Choose a size:</label>
          <select id='variantSelect' onChange={handleVariantChange}>
            {windBreaker.variants.map((variant) => (
              <option key={variant.id} value={variant.id} disabled={!variant.inStock}>
                {variant.label} {variant.inStock ? "" : "Out of stock"}
              </option>
            ))}
          </select>
        </div>

        <p>Price: ${selectedVariant.price.toFixed(2)}</p>
        <button onClick={addToCart}>Add To Cart</button>

        {message && <div className='message'>{message}</div>}
      </div>
    </>
  )
}

export default App
