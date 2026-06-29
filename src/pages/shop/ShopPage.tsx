import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Star, Filter, X, Minus, Plus, Trash2, ArrowRight, CreditCard, Truck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

const products = [
  {
    id: '1',
    name: 'Keyboard Unlocked: Complete Guide',
    slug: 'keyboard-unlocked',
    description: 'A comprehensive guide for learning keyboard from beginner to advanced. Includes video lessons access.',
    price: 89,
    category: 'book',
    image_url: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 50,
    is_digital: true,
    rating: 4.8,
    reviews: 45,
  },
  {
    id: '2',
    name: 'Music Theory Made Easy',
    slug: 'music-theory-easy',
    description: 'Simple approach to understanding music theory. Perfect for beginners.',
    price: 69,
    category: 'book',
    image_url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 35,
    is_digital: true,
    rating: 4.9,
    reviews: 32,
  },
  {
    id: '3',
    name: 'M-Audio Keystation 88 Key',
    slug: 'm-audio-keystation',
    description: 'Professional 88-key MIDI controller keyboard with semi-weighted keys.',
    price: 1250,
    category: 'instrument',
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 8,
    is_digital: false,
    rating: 4.7,
    reviews: 18,
  },
  {
    id: '4',
    name: 'Sustain Pedal Pro',
    slug: 'sustain-pedal',
    description: 'Professional piano-style sustain pedal compatible with most keyboards and digital pianos.',
    price: 79,
    category: 'accessory',
    image_url: 'https://images.pexels.com/photos/1246321/pexels-photo-1246321.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 25,
    is_digital: false,
    rating: 4.5,
    reviews: 12,
  },
  {
    id: '5',
    name: 'Resonance Branded T-Shirt',
    slug: 'resonance-tshirt',
    description: 'Premium quality cotton t-shirt with the Resonance logo. Available in multiple sizes.',
    price: 59,
    category: 'apparel',
    image_url: 'https://images.pexels.com/photos/996321/pexels-photo-996321.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 100,
    is_digital: false,
    rating: 4.6,
    reviews: 24,
  },
  {
    id: '6',
    name: 'Practice Notebook',
    slug: 'practice-notebook',
    description: 'Dedicated notebook for tracking your practice sessions and musical progress.',
    price: 25,
    category: 'material',
    image_url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 80,
    is_digital: false,
    rating: 4.4,
    reviews: 8,
  },
  {
    id: '7',
    name: 'Beginner Guitar Pack',
    slug: 'beginner-guitar',
    description: 'Acoustic guitar starter pack with gig bag, pick, and spare strings.',
    price: 450,
    category: 'instrument',
    image_url: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 12,
    is_digital: false,
    rating: 4.7,
    reviews: 22,
  },
  {
    id: '8',
    name: 'Metronome Digital',
    slug: 'digital-metronome',
    description: 'Digital metronome with multiple time signatures and tempo ranges.',
    price: 49,
    category: 'accessory',
    image_url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    stock: 45,
    is_digital: false,
    rating: 4.8,
    reviews: 15,
  },
];

const categories = ['all', 'book', 'instrument', 'accessory', 'apparel', 'material'];

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.reviews - a.reviews;
      }
    });

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.image_url,
      category: product.category,
      isPhysical: !product.is_digital,
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-gold-400">Shop</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Find the best music books, instruments, and accessories to support your musical journey.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30">
        <div className="container mx-auto px-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="card-hover overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.is_digital && (
                      <span className="absolute top-4 left-4 px-2 py-1 bg-success-500 text-white text-xs rounded font-semibold">
                        Digital
                      </span>
                    )}
                    {product.stock < 10 && !product.is_digital && (
                      <span className="absolute top-4 right-4 px-2 py-1 bg-warning-500 text-white text-xs rounded font-semibold">
                        Low Stock
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize mb-2">{product.category}</p>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gold-600 dark:text-gold-400 font-bold text-lg">
                        GHS {product.price}
                      </p>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CartPage() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingCart className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-6" />
        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Add some items to your cart and start shopping!</p>
        <Link to="/shop">
          <Button variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Browse Shop
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card divide-y divide-gray-200 dark:divide-gray-700">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex gap-4">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{item.category}</p>
                      <p className="text-gold-600 dark:text-gold-400 font-bold mt-2">GHS {item.price}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-error-500">
                        <X className="w-5 h-5" />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Button variant="ghost" onClick={clearCart} className="text-error-600">
                  <Trash2 className="w-4 h-4 mr-1" />
                  Clear Cart
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span>GHS {totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                    <span className="text-success-600">Free</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900 dark:text-white">Total</span>
                    <span className="font-bold text-gold-600 text-xl">GHS {totalPrice}</span>
                  </div>
                </div>
                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => navigate('/shop/checkout')}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Proceed to Checkout
                </Button>
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Truck className="w-4 h-4" />
                    <span>Free delivery in Accra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    paymentMethod: 'mtn-momo',
    momoNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/shop');
    } catch {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    navigate('/shop/cart');
    return null;
  }

  return (
    <div className="pt-20">
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-6">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">Delivery Method</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-4 rounded-xl border-2 text-left ${
                      deliveryMethod === 'pickup'
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <p className="font-medium text-gray-900 dark:text-white">Campus Pickup</p>
                    <p className="text-sm text-gray-500">Free pickup at our campus</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`p-4 rounded-xl border-2 text-left ${
                      deliveryMethod === 'delivery'
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <p className="font-medium text-gray-900 dark:text-white">Delivery</p>
                    <p className="text-sm text-gray-500">Free in Accra, GHS 20 elsewhere</p>
                  </button>
                </div>
                {deliveryMethod === 'delivery' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Input label="Address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <Input label="City" name="city" value={formData.city} onChange={handleChange} required />
                    <Input label="Region" name="region" value={formData.region} onChange={handleChange} required />
                  </div>
                )}
              </div>

              <div className="card p-6">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">Payment Method</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {['mtn-momo', 'telecel', 'visa', 'paystack'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: method })}
                      className={`p-4 rounded-xl border-2 text-left ${
                        formData.paymentMethod === method
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <p className="font-medium text-gray-900 dark:text-white capitalize">{method.replace('-', ' ')}</p>
                    </button>
                  ))}
                </div>
                {formData.paymentMethod.includes('momo') && (
                  <Input
                    label="Mobile Money Number"
                    name="momoNumber"
                    value={formData.momoNumber}
                    onChange={handleChange}
                    className="mt-4"
                    placeholder="Enter your MoMo number"
                    required
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">x{item.quantity}</p>
                      </div>
                      <span className="text-sm">GHS {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>GHS {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Delivery</span>
                    <span>{deliveryMethod === 'pickup' ? 'Free' : 'GHS 20'}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900 dark:text-white text-lg pt-2">
                    <span>Total</span>
                    <span className="text-gold-600">GHS {totalPrice + (deliveryMethod === 'delivery' ? 20 : 0)}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  className="w-full mt-6"
                  loading={isProcessing}
                  leftIcon={<CreditCard className="w-5 h-5" />}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
