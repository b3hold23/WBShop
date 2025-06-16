import React, {useState} from 'react';
import windBreaker from './productData';
import './assets/App.css'

function App() {
  const [selectedVariant, getSelectedVariant] = useState(windBreaker.variants[0]);
  const [message, setMessage] = useState("");

  return (
    <>
      <h1>HeLLOW OWLRD</h1>
    </>
  )
}

export default App
