import jacketImg from './assets/pngimg.com - jacket_PNG8042.png';
const windBreaker = {
    title: "Premium Tech Windbreaker",
    description: "Engineered for performance and built with precision, this premium tech windbreaker combines cutting-edge materials with minimalist design. Featuring a lightweight, water-resistant shell, laser-cut ventilation, and streamlined seams, it delivers optimal protection without sacrificing breathability. Smart pocket placement, adjustable fit, and a modern silhouette make it ideal for urban commuters, travelers, and outdoor explorers alike.",
    image: jacketImg,
    variants: [
        { id: 'S', label: 'Small', price: 39.99, inStock: true },
        { id: 'M', label: 'Medium', price: 39.99, inStock: true },
        { id: 'L', label: 'Large', price: 39.99, inStock: true },
        { id: 'XL', label: 'X-large', price: 39.99, inStock: false },
    ]
};

export default windBreaker;