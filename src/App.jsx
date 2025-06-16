import React, {useState} from 'react';
import windBreaker from './productData';
import './assets/App.css'

function App() {
  const [selectedVariant, setSelectedVariant] = useState(windBreaker.variants[0]);
  const [message, setMessage] = useState("");

  const handleVariantChange = (e) => {
    const variant = windBreaker.variants.find(v => v.id === e.target.value);
    setSelectedVariant(variant);
    setMessage("");
  };

  return (
    <>
      <h1>HeLLOW OWLRD</h1>
    </>
  )
}

export default App
