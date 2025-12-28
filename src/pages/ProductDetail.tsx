import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Check, 
  Minus, 
  Plus, 
  Shield, 
  Truck, 
  RotateCcw,
  FileText,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedDosage, setSelectedDosage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('benefits');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem, setIsCartOpen } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${product.dosages[selectedDosage]}`,
        name: product.name,
        price: product.price,
        image: product.image,
        dosage: product.dosages[selectedDosage],
      });
    }
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-cyan transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-cyan transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square glass-card overflow-hidden rounded-2xl">
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={tag === 'Best Seller' ? 'gold' : tag === 'Sale' ? 'destructive' : 'cyan'}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain p-12"
              />
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, text: '99.9% Pure' },
                { icon: FileText, text: 'COA Included' },
                { icon: Truck, text: 'Fast Shipping' },
              ].map((badge) => (
                <div key={badge.text} className="glass-card p-3 flex items-center justify-center gap-2">
                  <badge.icon className="w-4 h-4 text-cyan" />
                  <span className="text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="purity" className="mb-3">
                <Check className="w-3 h-3 mr-1" />
                {product.purity}% Purity Verified
              </Badge>
              <h1 className="font-heading text-h1 font-bold mb-3">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted-foreground/30'
                    )}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-4xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <Badge variant="destructive">Save ${(product.originalPrice - product.price).toFixed(2)}</Badge>
                </>
              )}
            </div>

            {/* Dosage Selector */}
            <div>
              <label className="block text-sm font-medium mb-3">Select Dosage</label>
              <div className="flex flex-wrap gap-3">
                {product.dosages.map((dosage, index) => (
                  <button
                    key={dosage}
                    onClick={() => setSelectedDosage(index)}
                    className={cn(
                      'px-6 py-3 rounded-xl border-2 font-medium transition-all',
                      selectedDosage === index
                        ? 'border-cyan bg-cyan/10 text-cyan'
                        : 'border-border hover:border-cyan/50'
                    )}
                  >
                    {dosage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center glass-card">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-white/5 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-16 text-center font-mono text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-white/5 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-muted-foreground">
                  {product.stockCount} in stock
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button variant="hero" size="xl" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={cn('w-5 h-5', isWishlisted && 'fill-coral text-coral')} />
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-cyan" />
                <div>
                  <div className="font-medium text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">On orders over $75</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-cyan" />
                <div>
                  <div className="font-medium text-sm">30-Day Returns</div>
                  <div className="text-xs text-muted-foreground">Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="glass-card rounded-2xl overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-border">
            {['benefits', 'details', 'usage', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'flex-1 px-6 py-4 text-sm font-medium transition-colors capitalize',
                  activeTab === tab
                    ? 'bg-white/5 text-cyan border-b-2 border-cyan'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'benefits' && (
              <div className="space-y-6">
                <h3 className="font-heading text-xl font-semibold">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                      <Check className="w-5 h-5 text-cyan" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">{product.longDescription}</p>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-6">
                <h3 className="font-heading text-xl font-semibold">Product Specifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm text-muted-foreground">Purity</div>
                    <div className="font-mono text-lg text-cyan">{product.purity}%</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div className="font-medium capitalize">{product.category}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm text-muted-foreground">Available Dosages</div>
                    <div className="font-medium">{product.dosages.join(', ')}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm text-muted-foreground">Stock Status</div>
                    <div className="font-medium text-emerald-400">In Stock ({product.stockCount} units)</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                <h3 className="font-heading text-xl font-semibold">How to Use</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold">1</div>
                    <div>
                      <div className="font-medium">Reconstitution</div>
                      <div className="text-muted-foreground text-sm">Add bacteriostatic water according to dosage guidelines</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold">2</div>
                    <div>
                      <div className="font-medium">Storage</div>
                      <div className="text-muted-foreground text-sm">Keep refrigerated after reconstitution. Use within 30 days.</div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold">3</div>
                    <div>
                      <div className="font-medium">Administration</div>
                      <div className="text-muted-foreground text-sm">Subcutaneous injection. Consult healthcare provider for proper dosing.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating} out of 5</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Based on {product.reviewCount} reviews</p>
                
                {/* Sample Reviews */}
                <div className="space-y-4">
                  {[
                    { name: 'John D.', rating: 5, text: 'Excellent quality product. Noticed results within the first week.' },
                    { name: 'Maria S.', rating: 5, text: 'Fast shipping and great customer service. Will order again!' },
                    { name: 'Alex T.', rating: 4, text: 'Good product, slightly pricey but worth it for the quality.' },
                  ].map((review, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{review.name}</div>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="font-heading text-h3 font-bold mb-8">You May Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
