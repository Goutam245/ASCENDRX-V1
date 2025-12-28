import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number | null;
    image: string;
    purity: number;
    rating: number;
    reviewCount: number;
    benefits: string[];
    tags: string[];
    inStock: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, setIsCartOpen } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setTimeout(() => {
      setIsAdding(false);
      setIsCartOpen(true);
    }, 500);
  };

  return (
    <div className="group relative glass-card overflow-hidden hover-lift">
      {/* Tags */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge
            key={tag}
            variant={tag === 'Best Seller' ? 'gold' : tag === 'Sale' ? 'destructive' : 'cyan'}
            className="text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Wishlist */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-coral hover:bg-white/20 transition-all"
      >
        <Heart className={cn('w-5 h-5', isWishlisted && 'fill-coral text-coral')} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block">
        <div className="aspect-square bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Purity Badge */}
        <Badge variant="purity" className="text-xs">
          <Check className="w-3 h-3 mr-1" />
          {product.purity}% Pure
        </Badge>

        {/* Name & Description */}
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-heading text-xl font-semibold group-hover:text-cyan transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5">
          {product.benefits.slice(0, 3).map((benefit) => (
            <span
              key={benefit}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'text-muted-foreground/30'
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            variant={isAdding ? 'gold' : 'default'}
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="gap-2"
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
