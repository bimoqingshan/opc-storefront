// Mock clothing product data for development
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Casual Cotton T-Shirt',
    description: 'Soft breathable cotton t-shirt for everyday wear. Regular fit, crew neck, short sleeves.',
    price: 19.99,
    originalPrice: 29.99,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Grey'],
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: '2',
    name: 'Slim Fit Denim Jeans',
    description: 'Classic slim fit denim jeans with stretch comfort. Perfect for casual and smart-casual looks.',
    price: 49.99,
    originalPrice: 69.99,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Light Blue'],
    rating: 4.3,
    reviews: 89,
    inStock: true,
  },
  {
    id: '3',
    name: 'Oversized Hoodie',
    description: 'Cozy oversized hoodie with kangaroo pocket. Soft fleece lining, perfect for layering.',
    price: 39.99,
    originalPrice: 54.99,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop',
    ],
    sizes: ['S/M', 'M/L', 'L/XL'],
    colors: ['Black', 'Grey', 'Navy', 'Pink'],
    rating: 4.7,
    reviews: 213,
    inStock: true,
  },
  {
    id: '4',
    name: 'Summer Floral Dress',
    description: 'Lightweight floral print dress for summer. V-neck, flowy silhouette, midi length.',
    price: 34.99,
    originalPrice: 44.99,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Blue', 'Floral Pink', 'Floral Yellow'],
    rating: 4.6,
    reviews: 176,
    inStock: true,
  },
  {
    id: '5',
    name: 'Athletic Joggers',
    description: 'Comfortable athletic joggers with elastic waistband and cuffs. Great for workout or lounge.',
    price: 29.99,
    originalPrice: 39.99,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy'],
    rating: 4.4,
    reviews: 94,
    inStock: true,
  },
  {
    id: '6',
    name: 'Leather Belt',
    description: 'Genuine leather belt with classic buckle. Adjustable size, 1.5 inch width.',
    price: 24.99,
    originalPrice: 34.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown'],
    rating: 4.2,
    reviews: 67,
    inStock: true,
  },
  {
    id: '7',
    name: 'Cropped Blazer',
    description: 'Smart cropped blazer for work or casual. Lightweight fabric, single-breasted.',
    price: 59.99,
    originalPrice: 79.99,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Beige', 'Navy'],
    rating: 4.5,
    reviews: 52,
    inStock: true,
  },
  {
    id: '8',
    name: 'Maxi Skirt',
    description: 'Elegant maxi skirt with elastic waist. Flowy fabric, perfect for summer days.',
    price: 27.99,
    originalPrice: 37.99,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=800&h=1000&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    rating: 4.3,
    reviews: 83,
    inStock: true,
  },
];

export const categories = [
  { id: 'all', name: 'All', icon: '✨' },
  { id: 'Tops', name: 'Tops', icon: '👕' },
  { id: 'Bottoms', name: 'Bottoms', icon: '👖' },
  { id: 'Dresses', name: 'Dresses', icon: '👗' },
  { id: 'Outerwear', name: 'Outerwear', icon: '🧥' },
  { id: 'Accessories', name: 'Accessories', icon: '👜' },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
